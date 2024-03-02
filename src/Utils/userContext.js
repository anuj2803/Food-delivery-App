import React from 'react'
import { createContext } from 'react';

const userContext = createContext({
    logedin:"Default user",
});

export default userContext;