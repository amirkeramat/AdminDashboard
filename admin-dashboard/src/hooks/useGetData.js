import React, { useState,useEffect } from 'react'
import supabase from '../config/supabaseClient';
const useGetData = (table,changed) => {
    const [datas,setDatas] = useState(null)
 useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from(table).select("*");
      if (error) {
        console.log(error);
      }
      if (data) {
        setDatas(data);
        console.log(changed,'get data');
      }
    };
    getData();
  }, changed);

  return [datas,setDatas]
}

export default useGetData