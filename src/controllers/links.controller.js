import pool from "../database";

export const renderAddLink = (req, res) => {
  res.render("links/add");
};

export const addLink = async (req, res) => {
  const { cliente, provedor, cantidad, turno} = req.body;
  const newLink = {
    cliente,
    provedor,
    cantidad,
    turno,
  };
  await pool.query("INSERT INTO links set ?", [newLink]);
  req.flash("success", "Link Saved Successfully");
  res.redirect("/links");
};

export const renderLinks = async (req, res) => {
  const links = await pool.query("SELECT * FROM links", [
    req.cliente,
  ]);
  res.render("links/list", { links });
};

export const deleteLink = async (req, res) => {
  const {id} = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash("success", "Link Removed Successfully");
  res.redirect("/links");
};

export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  console.log(links);
  res.render("links/edit", { link: links[0] });
};

export const editLink = async (req, res) => {
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


