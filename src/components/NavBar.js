import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  //console.log(links)

  const anchors = links.map((link) => (
    //console.log(link)
    <a key = {link} href= {"#" + link}>{link}</a>
  ));

  return (<nav>{anchors}</nav>);
}

export default NavBar;
