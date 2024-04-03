!important Read

<!-- ----------------------- -->
Dear FSD Team,
Kinldy note back end file name as backend.
And front end file name as front-end for easy understanding.

Please note in this React project we have used antd, bootstrap

we splited each pages under the folder src > Pages >
Aboutus.jsx
AppMenu.jsx
BillPayment.jsx
BillSuccessCard.jsx
BillSuccessCash.jsx
Cart.jsx
DietBenifits.jsx
DietFoods.jsx
DietTips.jsx
GetConsulatant.jsx (Newly added)
KnowYours.jsx (Newly added)
Feedback.jsx
FeedBackSuccess.jsx
FitChart.jsx
Footer.jsx
Home.jsx
Login.jsx
Products.jsx
Signout.jsx
Signup.jsx
StarRating.jsx
Start.jsx

in Aboutus.jsx file code provides about company and services and contact details, branch details.

in AppMenu.jsx file code helps to control nav bar menu which located in top of the web page. this helps user to reach another pages easily, by one click.

in BillPayment.jsx file code provides total cart items, qty and price with payment option, so that user can choose and pay.

in BillSuccessCard.jsx file code provides successful payment message...

in BillSuccessCash.jsx file code provides successful order placed message...

in Cart.jsx file code provides added cart item details with total price(not included with tax and other charges)...

in DietBenifits.jsx file code provides benifits of diets details to user.

in DietFoods.jsx file code provides about diet foods and processed foods, so that user can understand about foods.

in DietTips.jsx file code provides common tips about diet.

in Get Consultant file user can get Timing and Direct contact details of consultant.

in Know Yours file user can enter his/her weight and height, so that system checks with data, then reply a message to user on screen.

in Feedback.jsx file code help to get feedback from customers and users for update the service and products.

in Feedback.jsx file code provides feedback successful and thank you message to user.

in FitChart.jsx file code provides about normal height and weight details about women and men, so that users and customers can check with this fit chart.

in Footer.jsx file code provides footer details of web page.

in Home.jsx file code provides about service provide details.

in Login.jsx file code helps user to login or signin to the web page... (this is just set formally, but once used already sign up with his/her details, then only user can login).

in Products.jsx file code provides all products details as like card format, so that UI and details are easy to understand and select the product as per user wish.

in Signout.jsx file code provides successfully signout message to user. (this is we used just formally).

in Signup.jsx file code asks user details like name, contact number, address, diet for (weight gain or reduce). after successfull sign up page navigate to home page.

in StarRating.jsx file code control feedback ratings...

in Start.jsx file code initial web page like welcome home...

And for each page we make Routers.jsx and export and imported in needed files....

And we used Redux ItemSlice.js and store.js

For css we have used two files, one is common named as App.css and another one named as Style.css

so for mobile, tap, laptop and desktop screen wise we used css.

Please note

360px to 575px for smaller devices like mobile

576px to 767px for smaller devices like tap

768px to 991px for medium devices like small laptops

992px to 1199px for medium size desktops

1200px to 1399px for desktops

1400px to 1600px for larger desktops

//-----------------------------------------------------Major Amendment Details-----------------------

Kindly note revised file we amended App.css, Style.css, Login.jsx, RoutersPath.jsx, AppMenu.jsx and new files added
in Redux folder named as actions.js, reducer.js and loginActions.js for control login/logout authentications.

And please note we have added GetConsultant.jsx file in Pages folder. (Which is include consultant direct lines)
once user logged in then user can hit the Get Consultant menu, the display appears with the details.

And please note for 1400px display size we have adjusted the login page form size's.

KnowYours.jsx file we added for user can check his/her height and weight, so based on that his/her know whether height and weight is fit or not and user can reach the "/get-consultant" page.

------------------------Thank you for reading this message.------------------------------------------