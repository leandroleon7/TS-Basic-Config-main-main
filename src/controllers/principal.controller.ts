import { Request, Response } from "express";

//Vista
export function vistaResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("princi/principal-view");
}
