import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [selectCity, setSelectCity] = useState('臺北市');
    const [searchStation, setSearchStation] = useState(null);

    return (
        <UserContext.Provider value={{ selectCity, setSelectCity, searchStation, setSearchStation }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;