import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [selectCity, setSelectCity] = useState('臺北市');
    const [searchStation, setSearchStation] = useState(null);

    const [isChecked, setIsChecked] = useState(Array.from({ length: 13 }, () => true));
    const [isCheckedAll, setIsCheckedAll] = useState(true);

    const [data, setData] = useState(null);
    const [searchText, setSearchText] = useState('');

    return (
        <UserContext.Provider value={{
            selectCity, setSelectCity, searchStation, setSearchStation,
            isChecked, setIsChecked, isCheckedAll, setIsCheckedAll,
            data, setData, searchText, setSearchText
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;