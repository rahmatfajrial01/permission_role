import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import useAPI from "../../utils/hooks/useAPI";
import useAccess from "../../utils/hooks/useAccess";
import { Route, Routes } from "react-router-dom";
import CategoryPageList from "../pages/CategoryPageList";
import ManagerPage403 from "../../managers/pages/ManagerPage403";
import ManagerWidgetLayoutProtected from "../../managers/widgets/ManagerWidgetLayoutProtected";
import {
  CREATE_CATEGORIES,
  READ_CATEGORIES,
  UPDATE_CATEGORIES,
  DELETE_CATEGORIES
} from "../states/constants";
import CategoryPageCreate from "../pages/CategoryPageCreate";
import CategoryPageUpdate from "../pages/CategoryPageUpdate";
import CategoryPageDelete from "../pages/CategoryPageDelete";

const CategorySettingRouter = () => {
  const context = useContext(UtilStateContextBase);
  const api = useAPI();
  const access = useAccess(context, api);

  useEffect(() => {
    access.verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.auth.isAuthenticated]);

  return (
    <Routes>
      <Route
        index
        element={
          access.has(
            [READ_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageList />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="new"
        element={
          access.has(
            [CREATE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageCreate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="update/:id"
        element={
          access.has(
            [UPDATE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageUpdate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="delete/:id"
        element={
          access.has(
            [DELETE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageDelete />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />
    </Routes>

    
  );
};

export default CategorySettingRouter;
