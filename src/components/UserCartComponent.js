//components/UserCartComponent.js

//import React from 'react';
import React, { useEffect, useState } from 'react';

function UserCartComponent({
    sendInvoice,
	cartCourses,
	deleteCourseFromCartFunction,
	totalAmountCalculationFunction,
	setCartCourses,
    setAmount,
    setMobile
    
}) {
    /////////////////////////////////////////
    //////////////////////////
    

  /* 
async function sendInvoiceToTreaty(x){
    console.log('p2')
   
//let x=totalAmountCalculationFunction();
setAmount(x);
   // endpoint="a2778eec-84ec-35cb-a56e-2835e42ac1f3"
    fetch("https://oxz1zbereb.execute-api.eu-west-1.amazonaws.com/dev"
        ,{     //"https://rb0nw9m55f.execute-api.eu-west-1.amazonaws.com/Dev", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": "1",
            "password": "fadak",
            "amount":amount,
            "currency": "دع",
            "comment": "Goods",
            "invoiceNumber": "2354544453",
            "clientMobile": mobile
        
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
            console.log("Notification Result: ");            
          console.log(JSON.stringify(responseData));
        });
  }
  */
  //////////////////////////////
  const handleInputChange = (event) => {
    setMobile(event.target.value);
  };  

    ////////////////////////////////////////////////////////////
return (
<div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
	<h2>سلة المشتريات</h2>
	{cartCourses.length === 0 ? (
	<p className="empty-cart">سلة المشتريات فارغة</p>
	) : (
<div>
	<ul>
		{cartCourses.map((item) => (
			<li key={item.product.id} className="cart-item">
				<div>
					<div className="item-info">
						<div className="item-image">
							<img src={item.product.image} 
								alt={item.product.name} />
						</div>
						<div className="item-details">
							<h3>{item.product.name}</h3>
							<p>السعر: د.ع{item.product.price}</p>
						</div>
					</div>
					<div>
						<div className="item-actions">
							<button
								className="remove-button"
								onClick={() => 
								deleteCourseFromCartFunction(item.product)}>
								احذف المنتج
							</button>
							<div className="quantity">
								<button style={{ margin: "1%" }} 
									onClick={(e) => {
									setCartCourses((prevCartCourses) => {
										const updatedCart = prevCartCourses.map(
										(prevItem) =>
										prevItem.product.id === item.product.id
												? { ...prevItem, quantity: 
												item.quantity + 1 }
												: prevItem
										);
										return updatedCart;
									})
								}}>+</button>
								<p className='quant'>{item.quantity} </p>
								<button 
									onClick={(e) => {
									setCartCourses((prevCartCourses) => {
										const updatedCart = prevCartCourses.map(
										(prevItem) =>
										prevItem.product.id === item.product.id
												? { ...prevItem, quantity:
												Math.max(item.quantity - 1, 0) }
												: prevItem
										);
										return updatedCart;
									})
								}}>-</button>
							</div>
						</div>
					</div>
				</div>
			</li>
		))}
	</ul>
	<div className="checkout-section">
		<div className="checkout-total">
			<p className="total">المبلغ الكلي: 
				د.ع{totalAmountCalculationFunction()}
			</p>
		</div>

		<div className="checkout-section">
        <input type='text' id="clientMobile1" placeholder='رقم الهاتف'
        onChange={handleInputChange}
        ></input>
       
        </div>
        <button
              style={{ margin: "2%" }}
			className="checkout-button"
			disabled={cartCourses.length === 0 || 
			totalAmountCalculationFunction() === 0}
            /////////////////////////////////////////////////
//             onClick={()=>sendInvoiceToTreaty(totalAmountCalculationFunction())}
               onClick={()=>sendInvoice()}
         
             
            /////////////////////////////////////////////
		>
			الدفع
		</button>
	</div>
</div>
			)}
</div>
	);
}

export default UserCartComponent;
