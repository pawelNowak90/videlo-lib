import React, {Fragment} from 'react';

const UserSpace = (props) => {
    return (
        <Fragment>
            <main class="user-space">
                {props.children}
            </main>
        </Fragment>
     );
}

export default UserSpace;