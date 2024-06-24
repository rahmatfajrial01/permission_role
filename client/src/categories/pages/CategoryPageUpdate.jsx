import { useContext, useEffect } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../../utils/hooks/useDetail";
import {
 CATEGORY_DATA_INIT,
 CATEGORY_FIELD_GUIDE,
 CATEGORY_FIELD_VALIDATION,
} from "../states/constants";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ManagerWidgetTitle from "../../managers/widgets/ManagerWidgetTitle";
import ManagerWidgetGuide from "../../managers/widgets/ManagerWidgetGuide";
import ManagerWidgetValidation from "../../managers/widgets/ManagerWidgetValidation";
import ManagerWidgetAction from "../../managers/widgets/ManagerWidgetAction";

const CategoryPageUpdate = () => {
  const context = useContext(UtilStateContextBase);
  const navigate = useNavigate();
  const { id } = useParams();
  const categoryUpdate = useDetail(
    ["categories"],
   CATEGORY_DATA_INIT,
   CATEGORY_FIELD_GUIDE,
   CATEGORY_FIELD_VALIDATION
  );

  useEffect(() => {
    console.log(id);
    categoryUpdate.onGet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, context.auth.isAuthenticated]);

  return (
    <>
      <Container>
        <ManagerWidgetTitle title={"Update Category"} />
        <Row className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    value={categoryUpdate.state.name}
                    onChange={categoryUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryUpdate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryUpdate.validation.get("name")}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    type="number"
                    required
                    value={categoryUpdate.state.price || ""}
                    onChange={categoryUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryUpdate.guide}
                    field={"price"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryUpdate.validation.get("price")}
                  />
                </Form.Group> */}

                {/* <Form.Group className="mb-3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    name="stock"
                    type="number"
                    required
                    value={categoryUpdate.state.stock || ""}
                    onChange={categoryUpdate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryUpdate.guide}
                    field={"stock"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryUpdate.validation.get("stock")}
                  />
                </Form.Group> */}
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
            onClick={() => {
              categoryUpdate.onUpdate(id).then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CategoryPageUpdate;
