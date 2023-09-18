import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Razorpay payment",
            description: "RazorPay",
            image: "",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Harsh pathak",
                email: "pathakharsh@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        if (window.Razorpay) {
            const razor = new window.Razorpay(options);
            razor.open();
          } else {
            console.error("Razorpay SDK is not loaded.");
          }
        
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={5000} img={"https://w0.peakpx.com/wallpaper/831/303/HD-wallpaper-laptop-keys-gradient-thumbnail.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"https://w0.peakpx.com/wallpaper/270/332/HD-wallpaper-camera-lens-leaves-thumbnail.jpg"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default Home