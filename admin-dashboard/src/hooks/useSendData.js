import React from 'react'

const useSendData = (table) => {
useEffect(() => {
    const sendData = async () => {
      const { data, error } = await supabase
        .from("products")
        .insert(productsData);
      if (error) {
        console.log(error);
      }
    };
    sendData();
  }, [productsData]);
}

export default useSendData