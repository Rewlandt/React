

import {Breadcrumb, Alert} from 'react-bootstrap';


function Breadcrumbs () {
    return(
    <div>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="danger">
        Server Offline.
        </Alert>
    </div>
    )}

export default Breadcrumbs;