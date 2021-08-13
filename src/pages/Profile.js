import { Card, CardHeader, Typography } from '@material-ui/core';
import React from 'react'


const Profile = () => {
    return (
        <Card style={{
            minWidth: 400,
            minHeight: 400,
            marginLeft: 500,
            marginTop: 200
        }}>
            <CardHeader>
                User Profile
            </CardHeader>
            <Typography style={{ 
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 150,
                paddingLeft: 100  
            }}
            >User Profile Stuff</Typography>
        </Card>
    )
}

export default Profile