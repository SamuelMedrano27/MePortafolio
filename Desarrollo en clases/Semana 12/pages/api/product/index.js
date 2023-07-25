import data from '../../../data/productos.json';
import asyncHandler from '@/pages/libs/async.handler';
import fs from "fs";
import path from "path";

const productoPath = path.resolve("./data/productos.json");

const controllers = {
  GET: asyncHandler(async (req, res) => {
    res.status(200).json(data);
  }),
  POST: asyncHandler(async (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.image = saveImage(req.body.image);

    data.push(nuevoProducto);

    fs.writeFile(productoPath, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del producto" });
      } else {
        res.status(201).json({ message: "Producto agregado exitosamente" });
      }
    });
  }),
  PATCH: asyncHandler(async (req, res) => {
    const productoModificado = req.body;
    const productoId = productoModificado.id;

    if (productoModificado.image) {
      productoModificado.image = saveImage(req.body.image);
    }

    const newdata = data.map((producto) => {
      if (producto.id === productoId) {
        return {
          ...producto,
          ...productoModificado,
        };
      }
      return producto;
    });

    fs.writeFile(productoPath, JSON.stringify(newdata), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del producto" });
      } else {
        res.status(200).json({ message: "Producto modificado exitosamente" });
      }
    });
  }),
};

const saveImage = (base64Data) => {
  const base64Image = base64Data.split(";base64,").pop();
  const imageName = Date.now() + ".png";
  const imagePath = path.join("./public/images/", imageName);

  fs.writeFileSync(imagePath, base64Image, { encoding: "base64" });

  return `/images/${imageName}`;
};

export default function handler(req, res) {
  const controller = controllers[req.method];

  if (controller) {
    controller(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


/* export default function handler(req, res) {
  console.log(data);
  res.status(200).json(data)
} */
