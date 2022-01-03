
import {  cart} from '../model/cartSchema.js'
export const getCartItems = async (req, res) => {
	try {
		const cartItems = await cart.findOne({"userId":req.body.userId});
			res.status(200).json(cartItems);
		
		
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const addCartItems = async (req, res) => {
	try {
		// console.log(req.body)
		const cartItems = await cart.findOne({"userId":req.body.userId});
		console.log(cartItems===null)
            if(cartItems===null)
            {
               let updatedcartItems=cart.create(req.body)
                console.log(updatedcartItems)
                res.status(200).json(updatedcartItems);

            } 
            else
            {
		
				let response=updatecart(req)
				res.status(200).json(response);

               
            }
	}
     catch (error) {
		res.status(404).json({ message: error.message });
	}
};
async function updatecart(req){
	 var  updatedcartItems=await cart.updateOne({"userId":req.body.userId},{"items":req.body.items})
	// console.log(updatedcartItems,req.body)
	return updatedcartItems

}