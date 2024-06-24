import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { CREATE_CATEGORIES, READ_CATEGORIES } from "../states/constants";
import { NavDropdown } from "react-bootstrap";

const CategorySettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_CATEGORIES, CREATE_CATEGORIES]}
      or={true}
    >
      <NavDropdown title="Category Manager">
        <ManagerWidgetRBAC context={context} permissions={[READ_CATEGORIES]}>
          <NavDropdown.Item href="#categories">Categories</NavDropdown.Item>
        </ManagerWidgetRBAC>

        <ManagerWidgetRBAC context={context} permissions={[CREATE_CATEGORIES]}>
          <NavDropdown.Item href="#categories/new">New Category</NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  );
};

export default CategorySettingMenu;
