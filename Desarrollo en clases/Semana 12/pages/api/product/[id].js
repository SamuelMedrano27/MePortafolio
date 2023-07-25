import data from "../../../data/productos.json";
import asyncHandler from "@/pages/libs/async.handler";
import fs from "fs";
import path from "path";

const productoPath = path.resolve("./data/productos.json");

const controllers = {
  DELETE: asyncHandler(async (req, res) => {
    const { id } = req.query;
    const idProducto = id

    const newData = data.filter((producto) => producto.id != idProducto);

    fs.writeFile(productoPath, JSON.stringify(newData), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del producto" });
      } else {
        res.status(200).json(req.body);
      }
    });
  }),
  /* DELETE: asyncHandler(async (req, res) => {
    const { id } = req.query;
    const document = req.body;
    await deleteDoc(collection(db, "documents", id));
    res.status(200).json(document);
  }), */
};

export default function handler(req, res) {
  const controller = controllers[req.method];
  if (controller) {
    controller(req, res);
  } else {
    res.status(405).json({
      messge: "Method not allowed",
    });
  }
}
