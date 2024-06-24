import { useNavigate } from "react-router-dom";
import useCreate from "../../utils/hooks/useCreate";
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

const CategoryPageCreate = () => {
  const navigate = useNavigate();
  const categoryCreate = useCreate(
    ["categories"],
    CATEGORY_DATA_INIT,
    CATEGORY_FIELD_GUIDE,
    CATEGORY_FIELD_VALIDATION
  );

  return (
    <>
      <Container>
        <ManagerWidgetTitle title={"New Category"} />

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
                    value={categoryCreate.state.name}
                    onChange={categoryCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryCreate.guide}
                    field={"name"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryCreate.validation.get("name")}
                  />
                </Form.Group>
{/* 
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    type="number"
                    required
                    value={categoryCreate.state.price || ""}
                    onChange={categoryCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryCreate.guide}
                    field={"price"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryCreate.validation.get("price")}
                  />
                </Form.Group> */}
{/* 
                <Form.Group className="mb-3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    name="stock"
                    type="number"
                    required
                    value={categoryCreate.state.stock || ""}
                    onChange={categoryCreate.input.handler}
                  />
                  <ManagerWidgetGuide
                    guide={categoryCreate.guide}
                    field={"stock"}
                  />
                  <ManagerWidgetValidation
                    messages={categoryCreate.validation.get("stock")}
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
              categoryCreate.onCreate().then(() => navigate("../"));
            }}
          >
            Save
          </Button>
        </>
      </ManagerWidgetAction>
    </>
  );
};

export default CategoryPageCreate;
