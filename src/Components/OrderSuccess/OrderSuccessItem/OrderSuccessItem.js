import React from 'react';

function OrderSuccessItem(props) {
    console.log(props.id);
    return (
        <div>
            {props.id}
        </div>
    );
}

export default OrderSuccessItem;