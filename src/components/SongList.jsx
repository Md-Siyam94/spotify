
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SongList = () => {
    return (
        <div className='px-6 py-4'>
            <h2 className="text-3xl font-semibold my-3">For You</h2>
            <Form inline className=''>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2 pl-3 border py-3 w-full"
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SongList;