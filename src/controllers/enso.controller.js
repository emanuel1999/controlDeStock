import pool from "../database";
export const renderAddProd = (req, res) => {
  res.render("links/addEnso");
};

export const addProd = async (req, res) => {
  const { enspoli, enspapel, impresion, corte} = req.body;
  const newLink = {
    enspoli,
    enspapel,
    impresion,
    corte,
  };
  await pool.query("INSERT INTO totalprod1 set ?", [newLink]);
  req.flash("success", "Link Saved Successfully");
  res.redirect("/links");
};

export const renderProd = async (req, res) => {
  const totalProd1 = await pool.query("SELECT * FROM totalprod1", [
    req.id,
  ]);
  res.render("links", { totalProd1 });
};

export const deleteProd = async (req, res) => {
  const {id} = req.params;
  await pool.query("DELETE FROM totalprod1 WHERE ID = ?", [id]);
  req.flash("success", "Link Removed Successfully");
  res.redirect("/links");
};

export const renderEditprod = async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM totalprod1 WHERE id = ?", [id]);
  console.log(links);
  res.render("links/edit", { link: links[0] });
};

export const editprod = async (req, res) => {
  const { id } = req.params;
  const { cliente, provedor, cantidad, turno} = req.body;
  const newLink = {
    cliente,
    provedor,
    cantidad,
    turno,
  };
  await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
};
