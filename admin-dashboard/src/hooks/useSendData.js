import React ,{useState,useEffect} from 'react'

const useSendData = (table,data) => {
useEffect(() => {
    const sendData = async () => {
      const { data, error } = await supabase
        .from("products")
        .insert(data);
      if (error) {
        console.log(error);
      }
    };
    sendData();
  }, [data]);
}

export default useSendData