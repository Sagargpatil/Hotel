import React from "react";
import Card from "./Cards";
import { NavLink } from "react-router-dom";
import { sepecialveg } from "./Data";

const CardData = () => {
  return (
    <>
      <div>
        <NavLink to={"/sdata"}>
          <Card
            title="Starter"
            imageUrl="istockphoto-1333237441-1024x1024.jpg"
          />
        </NavLink>
        <NavLink to={"/specialstarter"}>
          <Card
            title="Special Starter"
            imageUrl="istockphoto-178600487-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/tea"}>
          <Card
            title="Tea Coffee"
            imageUrl="istockphoto-489377142-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/salad"}>
          <Card title="Salad & Papad" imageUrl="pexels-photo-2116090.jpeg" />
        </NavLink>
        <NavLink to={"/soup"}>
          <Card title="Soup" imageUrl="istockphoto-1226586928-612x612.jpg" />
        </NavLink>
        <NavLink to={"/maincourse"}>
          <Card
            title="Main Course"
            imageUrl="istockphoto-942116650-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/dal"}>
          <Card title="Dal" imageUrl="istockphoto-1205482227-612x612.jpg" />
        </NavLink>
        <NavLink to={"/chinese"}>
          <Card title="Chinese" imageUrl="istockphoto-1144501138-612x612.jpg" />
        </NavLink>
        <NavLink to={"/roti"}>
          <Card title="Roti" imageUrl="istockphoto-900220822-612x612.jpg" />
        </NavLink>
        <NavLink to={"/paneer"}>
          <Card
            title="Paneer Special"
            imageUrl="istockphoto-1292629539-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/rice"}>
          <Card title="Rice" imageUrl="istockphoto-980083592-612x612.jpg" />
        </NavLink>
        <NavLink to={"/specialveg"}>
          <Card
            title="Special Veg"
            imageUrl="istockphoto-1158601049-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/colddrinks"}>
          <Card
            title="Cold Drinks"
            imageUrl="istockphoto-668030702-612x612.jpg"
          />
        </NavLink>
        <NavLink to={"/snacks"}>
          <Card title="Snacks" imageUrl="istockphoto-1398144537-612x612.jpg" />
        </NavLink>
      </div>
    </>
  );
};

export default CardData;
