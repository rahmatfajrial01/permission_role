import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail";
import { CATEGORY_DATA_INIT, CATEGORY_FIELD_GUIDE, CATEGORY_FIELD_VALIDATION } from "../states/constants";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";

const CategoryPageDelete = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryDelete = useDetail(
    ["categories"],
    CATEGORY_DATA_INIT,
    CATEGORY_FIELD_GUIDE,
    CATEGORY_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    categoryDelete.onGet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, context.auth.isAuthenticated]);

  return (
    <>
      <Container>
        <ManagerWidgetTitle title={"Delete Category"} />
        <Row className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <p>Are you sure you want to delete this category?</p>
                <div>
                  <strong>Name: </strong> {categoryDelete.state.name}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <ManagerWidgetAction>
        <>
          <Button variant="outline-dark" onClick={() => navigate("../")}>
            Back
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              categoryDelete.onDelete(id).then(() => navigate("../"));
            }}
          >
            Delete
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CategoryPageDelete;