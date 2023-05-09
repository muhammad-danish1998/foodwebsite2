import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      restaurantoption: "Restaurant option",
      minimumorder: "Minimum order",
      minutes: "Min",
      min: "Min",
      colophon: "Colophon",
      totalpayable: "Total payable",
      iepleasedontringthebellbabyissleeping:
        "ie: Please don't ring the bell. baby is sleeping.",
      payment: "Payment method please",
      login: "Login",
      footercopyrights: "© liefermars.de 2022",
      pickup: "Pickup",
      termsandconditions: "Terms & conditions",
      note: "Note",
      addnoteoptional: "Add note (optional)",
      cashondelivery: "Cash on delivery",
      alreadyregisteredsignin: "Already registered? sign in",
      orderandpay: "Order and pay",
      socialmediaandapps: "Find us on",
      restaurantratings: "Rating",
      paywithcard: "Pay with Card",
      paywithpaypal: "Pay with Paypal",
      cookies: "Accept cookies",
      dataprivacy: "Data privacy",
      emaiaddress: "Email Address",
      rememberme: "Remember me",
      flooroptional: "Floor (optional)",
      enteryouremail: "Enter your e-mail",
      opennow: "Open now  ",
      close: "Close",
      registerhere: "Register here",
      home: "Home",
      yourname: "Your name ",
      japan: "Japanese",
      loginnow: "Login now",
      notamember: "Not a member? ",
      contactus: "Contact",
      lebanese: "Lebanese",
      homebannertxt:
        "Liefermars is the best online food order management system.",
      recovermypassword: "Recover my password",
      minimumorderamount: "Minimum order amount",
      orloginwith: "Or login with  ",
      enterpassword: "Enter password",
      paypal: "Paypal",
      personalinformation: "Personal Information",
      zip: "Zip",
      asap: "Asap",
      streetname: "Street",
      repeatyourpassword: "Repeat your password *",
      apartmentorsuite: "Apartment or suite",
      signin: "Sign in",
      register: "Register",
      location: "Location",
      indian: "Indian",
      chinese: "Chinese",
      italian: "Italian",
      thai: "Thai",
      american: "American",
      turkish: "Turkish",
      grecian: "Grecian",
      ordernow: "Order now",
      exploreus: "Explore us",
      contact: "Contact",
      email: "Email",
      weaccept: "We accept",
      delivery: "Delivery",
      quality: "Quality",
      freedelivery: "Free delivery  ",
      clearfilter: "Clear filter",
      menu: "Menu  ",
      reviews: "Reviews",
      restaurantinfo: "Restaurant info",
      yourshoppingcartisempty: "Your shopping cart is empty.",
      readmore: "Read more",
      addtocart: "Add to cart",
      noreviewfound: "No review found",
      deliverycosts: "Delivery costs",
      openinghours: "Opening hours",
      closedfordelivery: "Closed for delivery",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      totalpurchase: "Total purchase",
      deliveryfee: "Delivery fee",
      yourorder: "Your order",
      housenumber: "House number",
      apartmentoptional: "Apartment (optional)",
      city: "City",
      companyoptional: "Company (optional)",
      name: "Name",
      phone: "Phone",
      youexamplecom: "You@example.com",
      deliverytime: "Delivery time",
      signup: "Sign up",
      msgprofileupdated: "Your profile has been successfully updated.",
      gettoknowus: "Get to Know Us",
      msgprofileimgremv:
        "Profile image is remove. Please wait for refresh your page.",
      msgrestnotdeliverzip:
        "This restaurant is not deliver to your current zip code",
      msgcnfrmemailfrgtpass:
        "A confirmation email has been mailed.Please check your mail box for the token link.",
      msgemailnotreggistered: "This email is not registered.",
      msginvalidemailpass:
        "Invalid login please enter a valid email and password",
      msgadrscrtd: "Address created successfully. please wait...",
      msgadrsupdt: "Address update successfully. please wait...",
      msgcntctadmn:
        "Something happened please try again or contact website administrator.",
      msgpasschngd: "Password changed successfully",
      msgoldpassentr: "Please enter valid old password.",
      msgreqsndsuccess: "Request has been successfully send.",
      msgslctdrstrntclsd:
        "The restaurant you have selected is currently closed. you can go back to restaurant list and pick another restaurant to order.",
      adrsdltd: "Address deleted successfully",
      noadrsfnd: "No address found in database . please wait for redirect",
      dnthvorder: "You dont have any order.",
      emailalrdyexistreg:
        "Sorry this email address is already exist please choose different email for registration.",
      norstfndtharea: "No restaurants found in this specific area!",
      msgemailnotreggisteredoract:
        "This email is not registered or already activated.",
      usrcrtdscsfl: "User created successfully. please wait…",
      existingcustq: "Existing  customer?",
      clicktologin: "Click here to login",
      forgetpassword: "Forget password",
      logout: "Logout",
      about: "About us",
      profile: "Profile",
      myreviews: "My Reviews",
      mydeliveryaddress: "Delivery Address",
      address: "Address",
      myorder: "My Orders",
      accountsettings: "Account settings",
      changepassword: "Change Password",
      welcometo: "Welcome to",
      welcome: "Welcome",
      abouttxtcontent: "About us text lorem ipsum",
      telephonehelp: "Telephone help",
      pleasecall: "Please call",
      emailhelp: "Email help",
      plzsendusemail: "Please send us email",
      sendyourrequest: "Send your request",
      dashboard: "Dashboard",
      suggestedrestaurant: "Suggested restaurants",
      addnewaddress: "Add new address",
      optional: "Optional",
      save: "Save",
      newaddress: "New address",
      orderdetail: "Order detail",
      profileimage: "Profile Picture",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      chooseyouroption: "Choose your option",
      oldpassword: "Old password",
      newpassword: "New password",
      repeatnewpassword: "Repeat new password",
      goback: "Go Back",
      companyregister: "Company Register",
      registeryourrestaurant: "Register Your Restaurant",
      registerrestaurant: "Register Restaurants",
      loginhistory: "Login History",
      yourrestaurantname: "Your Restaurant Name",
      yourrestaurantphone: "Your Restaurant Phone",
      yourrestaurantemail: "Your Restaurant Email",
      yourrestaurantaddress: "Your Restaurant Address",
      closed: "Closed",
      account: "Account",
      order: "Order",
      loadmore: "Load More",
      firstname: "First Name",
      lastname: "Last Name",
      phoneNumber: "Phone Number",
      country: "Country",
      postcode: "Postcode",
      status: "Status",
      norecfnd: "No records found...",
      active: "Active",
      inactive: "Inactive",
      checkout: "Checkout",
      fillinnewadr: "Fill in new address",
      pleaseenterhousenum: "Please enter your House Number.",
      zipcodereq: "Zip code required",
      sndyrmsg: "Send Your Message",
      submitnow: "Submit Now",
      areyousure: "Are you sure?",
      reallywanttodelete:
        "Do you really want to delete these records? This process cannot be undone.",
      cancel: "Cancel",
      delete: "Delete",
      or: "or",
      questions: "Questions",
      perfmrng: "Performance Range",
      setting: "Setting",
      fnameisreq: "Valid first name is required.",
      phonenumreq: "Valid your phone is required.",
      lnameisreq: "Valid last name is required.",
      validemailreq: "Please enter a valid email.",
      cityreq: "City required.",
      pleaseenterstrname: "Please enter your street name.",
      yourmsg: "Your Message",
      subject: "Subject",
      typereviewhere: "Type Review Here",
      entertitle: "Enter title",
      whatisyrreview: "What is your review",
      searchproduct: "Search Product",
      restaurantsanddishes: "Restaurants and dishes",
      bestmatchsort: "Best match",
      estmdeliverytimesort: "Estimated Delivery Time",
      mostpopularsort: "Most popular",
      minorderamountsort: "Min. order amount",
      alphabeticalsort: "Alphabetical",
      previous: "Previous",
      next: "Next",
      editaddress: "Edit Address",
      reviewpending: "Review Pending ",
      pending: "Pending",
      accepted: "Accepted",
      cooking: "Cooking",
      ontheway: "On the Way",
      deliverd: "Delivered",
      cancelled: "Cancelled",
      writereview: "Write Review",
      description: "DESCRIPTION",
      quantity: "QUENTITY",
      price: "PRICE",
      total: "TOTAL",
      subtotal: "SUBTOTAL",
      grandtotal: "GRAND TOTAL",
      submitreview: "Submit Review",
      howwasfood: "How was Food?",
      howwasdelivery: "How was delivery?",
      whatwasdeliverytime: "What was Delivery Time",
      invoicecreatedoncomputer:
        "Invoice was created on a computer and is valid without the signature and seal.",
      showfilter: "Show Filter",
      noprodfound: "No Product Found",
      savefornextorder: "Save these remarks for your next order.",
      mint: "Min",
      nocategoryfound: "No category found.",
      doingbusiness: "Doing Business",
      becomeapartnerrestaurant: "Become a Partner Restaurant",
      recommendarestaurant: "Recommend a Restaurant",
      termsofservice: "Terms of Service",
      privacy: "Privacy",
      deliverylacations: "Delivery Lacations",
      weusecookiestopersonalizecontent:
        "We use cookies to personalize content and ads. To be able to offer functions for social media and to analyze access to our website - you will find all information on this in the data protection regulations.",
      notwindig: "Necessary wind",
      praferenzen: "Preferences",
      statistiken: "Statistics",
      marketing: "Marketing",
      allowallcookies: "Allow all cookies",
      confirmselection: "confirm selection",
      viewdetails: "View Details",
      cookiestext:
        "This website uses cookies to ensure the best possible functionality. More information.",
      cookiessetting: "Cookies setting",
      onlyessentialcookies: "Only essential Cookies",
      acceptallcookies: "Accept all cookies",
      pgabouttitle: "About Us",
      pgabouthd1: "About Us",
      pgaboutpara1:
        "Liefermars.de was founded in January 2023 in Ludwigshafen, Germany with a vision to transform the existing food delivery mechanism into a digital world throughout Europe. We are not only playing an intermediary role but also working on capacity building of newly emergent businesses in the food sector. With highly skilled team Liefermars.de provides customer focused services including exchange of information among users and service providers, 6Hr technical support and complaint handling mechanism. Liefermars.de came into existence to transform the food delivery services for customers SMART and easy anywhere. Liefermars.de is a unique consolidated platform which gives users options to order their favorite food from the nearest partner restaurant. The p…",
      pgtermsnservtitle: "Terms of Service",
      pgtermsnservhd1: "I. Scope, contract language",
      pgtermsnservpara1sec1:
        "(1) These General Terms and Conditions (hereinafter: GTC) apply to everything between you and the Digicom Company, Brandenburger Straße 11, 67065 Ludwigshafen, (HRB number, VAT ID number [ KPB1] ) represented by Mr. Hamayoon Rasoly, Brandenburger Str. 11, 67065 Ludwigshafen (hereinafter: Digicom or we) via the platform liefermars.de (hereinafter: Liefermars), concluded contracts.",
      pgtermsnservpara1sec2:
        "(2) The following terms and conditions apply exclusively to Liefermars and the associated services between us and you in the version valid at the time of the order. If you use the services of Liefermars, you agree to the terms and conditions. We only recognize conditions that conflict with or deviate from our General Terms and Conditions if we expressly agree to their validity in writing.",
      pgtermsnservpara1sec3:
        "(3) The language available for the conclusion of the contract is exclusively German. Translations of these Terms and Conditions into other languages are for your information only. In the event of any differences between the language versions, the German text takes precedence.",
      pgtermsnservhd2:
        "II. Content of the contract, conclusion of the contract",
      pgtermsnservpara2sec1:
        "(1) We help you to order and arrange food, dishes, dishes and drinks (hereinafter: ",
      pgtermsnservpara2sec2:
        "(2) We publish and broker offers from the respective partner restaurants on Liefermars. The contract for the preparation and purchase of the goods [and their delivery] is concluded directly between you and the restaurant. The contractual conditions of the partner restaurant, which you agree to when submitting the offer, apply in this respect. We assume no liability for the completeness and correctness of the offers. The respective partner restaurant is responsible for the proper quality of the goods and proper delivery.",
      pgtermsnservpara2sec3:
        "(3) By clicking the Order with obligation to pay button [KB3]&nbsp;in the last step of the ordering process, you make a binding offer to book the goods and services displayed in the order overview. You will receive an order confirmation immediately after sending the order, but this does not yet represent acceptance of your contract offer. A contract between you and us is formed as soon as we accept your order via a separate e-mail. [KB4]&nbsp;Please check the SPAM folder of your e-mail inbox regularly.",
      pgtermsnservhd3:
        "III. Technical steps up to the conclusion of the contract and correction of input errors",
      pgtermsnservpara3sec1:
        "As part of the ordering process, you first place the desired goods in the shopping cart. There you can change the desired quantity at any time or remove selected goods or services entirely. If you have deposited the goods there, clicking on the ",
      pgtermsnservhd4: "IV. Storage of the text of the contract",
      pgtermsnservpara4sec1:
        "The contractual provisions with information on the ordered goods or booked services, including these terms and conditions and the cancellation policy, will be sent to you by e-mail with the acceptance of the contract offer or with the notification of this. We do not store the contractual provisions. [KB6] ",
      pgtermsnservhd5:
        "V. Your obligations to cooperate to enable delivery[KB7] ",
      pgtermsnservpara5sec1:
        "(1) You are obliged to provide your current contact details (name, address, telephone number and e-mail address) on Liefermars and to ensure that they are kept up to date. At the time your order is expected to be delivered, you should be available by email or phone to resolve any delivery issues. Otherwise, an order may not be handed over or not handed over in time. In the event of unavailability for which you are responsible, the supplier is entitled to place the goods at a suitable location near the delivery address. In this case, we assume no responsibility for any loss of quality or the whereabouts of the goods. Alternatively, the ordered goods can also be brought back to the partner restaurant, about which you will be informed immediately. In this case, you can pick up the goods there.",
      pgtermsnservpara5sec2:
        "(2) If the partner restaurant enables the goods to be picked up and you select this option when ordering, you undertake to be present at the pick-up location at the specified time. Otherwise, the quality of the goods may deteriorate, for which we assume no responsibility.",
      pgtermsnservpara5sec3:
        "(3) Delivery of alcoholic beverages is only permitted to persons who have reached the legally required minimum age. You may therefore be asked to identify yourself. If you cannot do this, the alcoholic goods must not be handed over.",
      pgtermsnservhd6: "VI. Prices and terms of payment",
      pgtermsnservpara6sec1:
        "(1) All prices stated on Liefermars include the applicable statutory sales tax.",
      pgtermsnservpara6sec2:
        "(2) The invoice amount is due upon receipt of the order confirmation. Any delivery costs incurred are specified in the order form and are shown separately on the invoice.",
      pgtermsnservpara6sec3:
        "(3) The respective partner restaurant with which you have concluded a contract via Liefermars authorizes us to accept your payment.",
      pgtermsnservpara6sec4:
        "(4) Payment can be made online or in cash. Online payment can be made by credit card, Paypal, … [KB8]  possible.",
      pgtermsnservhd7: "pgtermsnservhd7",
      pgtermsnservpara7sec1:
        "(1) You can order goods on Liefermars as a guest or as a registered user. As a registered user, you do not have to enter your personal data every time, but you can simply log into your customer account before or as part of an order with your e-mail address and the password you chose when registering. With the registration alone there is no obligation to pay for the goods offered on Liefermars. When registering, enter your e-mail address and choose a password. You agree not to provide false personal information and to update it before further use if there are any changes.",
      pgtermsnservpara7sec2:
        "(2) When using the customer account, you are responsible for ensuring that the confidentiality of the account, password and access restrictions to its end devices are maintained. To the extent permitted by applicable law, you are responsible for all actions that occur through your account and the use of the password. If you become aware that a third party may have obtained knowledge of your password, you should inform us and take appropriate measures to protect the data.",
      pgtermsnservpara7sec3:
        "(3) You may not use access to the customer account for abusive or illegal purposes. In the event of violations of these terms of use or other illegal behavior, we reserve the right to block your account.",
      pgtermsnservpara7sec4:
        "(4) You can change or delete the payment method information stored in your customer account at any time.",
      pgtermsnservpara7sec5:
        "(5) You have the option of deleting your account via the [insert name] button, which you can reach via [...]. [KB10] The corresponding account access will then be deactivated and the personal data stored by us will be deleted as soon as the purpose for which they were collected no longer applies.",
      pgtermsnservhd8: "VIII. Customer Reviews",
      pgtermsnservpara8sec1:
        "(1) You have the opportunity to rate our partner restaurants and write reviews on Liefermars. The reviewers themselves are responsible for the content of these reviews. There is no claim against us on the possibility of creating reviews or their permanent storage and publication.",
      pgtermsnservpara8sec2:
        "(2) We reserve the right to delete reviews that contain or represent legal violations and inappropriate or irrelevant content at any time and without notice.",
      pgtermsnservhd9: "IX. processing of your personal data",
      pgtermsnservpara9sec1:
        "Personal data is processed as part of the registration and use of the customer account or the order as a guest. You can find detailed information about the data processing procedures, legal bases and your rights in the data protection declaration for the customer portal under [Insert link to data protection declaration here].",
      pgtermsnservhd10: "X. Right of Withdrawal",
      pgtermsnservpara10sec1:
        "(1) If you are a consumer, you have a right of withdrawal. A consumer is any natural person who enters into a legal transaction for purposes that are predominantly neither commercial nor self-employed. The exceptions to the right of withdrawal are regulated in the following paragraph (2).",
      pgtermsnservhd11: "Right of withdrawal",
      pgtermsnservpara11sec1:
        "  Right of withdrawal  You have the right to revoke this contract within fourteen days without giving reasons. The cancellation period is fourteen days from the day on which you or a third party named by you who is not the carrier took possession of the goods. In order to exercise your right of withdrawal, you must send us (Digicom [KB11]  Company, Brandenburger Straße 11, 67065 Ludwigshafen, support@liefermars.de) a clear declaration (e.g. a letter sent by post, fax or e-mail). inform you of your decision to withdraw from this contract. You can use the attached sample revocation form for this, but this is not mandatory. To meet the cancellation deadline, it is sufficient for you to send the communication regarding your exercise of the right of cancellation before the cancellation period has expired.  ",
      pgtermsnservhd12: "Consequences of revocation",
      pgtermsnservpara12sec1:
        "If you revoke this contract, we have paid you all payments that we have received from you, including delivery costs (except for the additional costs resulting from the fact that you have chosen a different type of delivery than the cheap standard delivery offered by us have), immediately and at the latest within fourteen days from the day on which we received the notification of your cancellation of this contract. For this repayment, we use the same means of payment that you used in the original transaction, unless something else was expressly agreed with you; under no circumstances will you be charged fees for this repayment.",
      pgtermsnservpara12sec2:
        "We may refuse repayment until we have received the goods back or until you have provided proof that you have returned the goods, whichever is earlier.",
      pgtermsnservpara12sec3:
        "You must return or hand over the goods to us immediately and in any event no later than fourteen days from the day on which you inform us of the cancellation of this contract. The deadline is met if you send back the goods before the period of fourteen days has expired.",
      pgtermsnservpara12sec4:
        "You bear the direct costs of returning the goods.",
      pgtermsnservpara12sec5:
        "You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods.",
      pgtermsnservpara12sec6:
        "(2) The right of revocation does not apply to contracts for delivery, insofar as the delivery of goods is concerned,",
      pgtermsnservpara12sec7:
        "a. which are not prefabricated and for the production of which an individual selection of the determination by the consumer is decisive or which are clearly tailored to the personal needs of the consumer (§ 312g Para. 2 No. 1 BGB,",
      pgtermsnservpara12sec8:
        "b. which can spoil quickly or whose expiry date would soon be exceeded (§ 312g Para. 2 No. 2 BGB),",
      pgtermsnservpara12sec9:
        "c. which are not suitable for return for reasons of health protection or hygiene if their seal was removed after delivery (§ 312g Para. 2 No. 3 BGB).w",
      pgtermsnservpara12sec10:
        "i.e. if these were inseparably mixed with other goods after delivery due to their nature (§ 312g Para. 2 No. 4 BGB).",
      pgtermsnservpara12sec11:
        "(3) We inform you about the model cancellation form according to the legal regulation as follows:",
      pgtermsnservpara12sec12: "Sample withdrawal form   ",
      pgtermsnservpara12sec121:
        "(If you want to cancel the contract, please fill out this form and send it back.)   — To Digicom [KB12]  Company, Brandenburger Straße 11, 67065 Ludwigshafen, support@liefermars.de: — I/we (*) hereby revoke the contract concluded by me/us (*) for the purchase of the following Goods (*)/ the provision of the following service (*) — Ordered on (*)/received on (*) — Name of consumer(s) — Address of consumer(s) — Signature of consumer(s)( s) (only in the case of notification on paper) — Date (*) Delete whichever is not applicable ",
      pgtermsnservhd13: "XI. Limitation of Liability",
      pgtermsnservpara13sec1:
        "(1) We exclude our liability for slightly negligent breaches of duty, unless damage to life, limb or health or guarantees are affected or claims under the Product Liability Act are affected. Furthermore, liability for the breach of essential contractual obligations (obligations whose fulfillment is essential for the proper execution of the contract and on the observance of which the contractual partner regularly relies and may rely) remains unaffected. In cases of the previous sentence, liability is limited to the foreseeable, contract-typical damage.",
      pgtermsnservpara13sec2:
        "(2) The limitation of liability set out in paragraph 1 also applies to our legal representatives and vicarious agents if claims are asserted directly against them.",
      pgtermsnservhd14: "XII. Complaints and Dispute Resolution",
      pgtermsnservpara14sec1:
        "(1) We process all complaints regarding our service and the use of Liefermars as well as the provision of the customer account carefully and properly. You can address your complaints to us via any of the contact options available on our website. You can reach us in particular via the following contact details: [KB13] ",
      pgtermsnservpara14sec2:
        "(2) The respective partner restaurant is solely responsible for complaints relating to the ordering and delivery of goods from our partner restaurants. We will forward your complaint in this regard to the partner restaurant as soon as possible.",
      pgtermsnservpara14sec3:
        "(3) The European Commission provides a platform for online Dispute resolution (OS) ready. Our email address is:        [KB14] ",
      pgtermsnservpara14sec4:
        "(4) We are neither obliged nor willing to participate in a dispute settlement procedure under the Consumer Dispute Settlement Act (VSBG).",
      pgtermsnservhd15: "XIII. Final Provisions",
      pgtermsnservpara15sec1:
        "(1) The law of the Federal Republic of Germany shall apply to the exclusion of the UN Sales Convention if",
      pgtermsnservpara15sec2:
        "a. you have your habitual residence in Germany, or",
      pgtermsnservpara15sec3:
        "b. Your habitual residence is in a country that is not a member of the European Union.",
      pgtermsnservpara15sec4:
        "In the event that you have your habitual residence in a member state of the European Union, the applicability of German law also applies, whereby mandatory provisions of the state in which you have your habitual residence remain unaffected.",
      pgtermsnservpara15sec5:
        "(2) If you had your domicile or habitual abode in Germany when the contract was concluded and either relocated from Germany at the time we brought an action or your domicile or habitual abode is unknown at that time, the place of jurisdiction for all disputes is our registered office company in Ludwigshafen.",
      pgtermsnservpara15sec6:
        "(3) Should individual provisions of this contract be ineffective, this shall not affect the rest of the contract",

      pgdataprivtitle: "Data Privacy",
      pgdataprivhd11: "Contact details of the person responsible",
      pgdataprivpara1sec1:
        "We welcome you to our website. The security of your data is important for us. Therefore, we will show you below how we process your personal data.",
      pgdataprivhd22: "General processing of visitor data",
      pgdataprivpara2sec1:
        "Our website can generally be used without providing any personal data.",
      pgdataprivpara2sec2:
        "However, we would like to point out that in this case access data will also be collected and stored in the server log files. This concerns in particular the following data:",
      pgdataprivpara2sec3:
        "We evaluate this information in an anonymous form to ward off attacks and to improve our offer (processing of personal data in the context of a weighing of interests in accordance with Art. 6 Para. 1 S. 1 lit. f) DSGVO) and then delete it. The data cannot usually be traced back to you personally and is not merged with other data.",
      pgdataprivpara2sec4:
        "However, if there are concrete indications of illegal use, we reserve the right to subsequently evaluate the data.",
      pgdataprivhd33: "data categories; data sources",
      pgdataprivpara3sec1:
        "In principle, we process the personal data that is transmitted by you in connection with the use of our website or which you provide to us as part of an inquiry, a pre-contractual legal relationship or a contractual relationship. In individual cases and insofar as this is necessary in the context of the fulfillment of the contract, we also process personal data that has been taken from publicly accessible sources (e.g. commercial register, debtor registers, Internet) in a permissible manner or that has been given to us by third parties (e.g. credit bureaus) in a permissible manner. were transmitted.",
      pgdataprivpara3sec2:
        "This can be technical data concerning you (IP address, browser type), personal data (name, birthday, legal representative), address data (address, e-mail address, contact person), financial data (name of account holder, IBAN, BIC ), contract data (contract term, services purchased, cancellations), communication data (correspondence, e-mail traffic), advertising data (sales letters) and other comparable categories of personal data.",
      pgdataprivpara3sec3:
        "When you visit our website, we also process location data such as the position of the device, your household and comparable location data. The processing takes place for the purpose of providing you with an individual offer for restaurants in your area. In these cases, data processing takes place exclusively on the basis of your consent in accordance with Article 6 (1) sentence 1 lit. a) GDPR.",
      pgdataprivhd44:
        "Processing of personal data after consent (Art. 6 Para. 1 S. 1 lit. a) GDPR)",
      pgdataprivpara4sec1:
        "In individual cases, we will obtain your consent for specific purposes that are expressly stated in connection with the data collection, for example for the collection of location data.",
      pgdataprivpara4sec2:
        "In these cases, data processing takes place exclusively on the basis of your consent. It may be that the processing of your request is not possible without your consent and must therefore be made dependent on it. The data is processed exclusively for the purpose(s) expressly stated.",
      pgdataprivpara4sec3:
        "You can revoke your consent at any time with effect for the future. The revocation has no influence on the legality of the processing up to the time of the revocation.",
      pgdataprivpara4sec4:
        "Insofar as personal data is transferred to a third country, we comply with the data protection regulations for this in that the data transfer is based on standard contractual clauses or we obtain your consent to this in accordance with Article 49 (1) sentence 1 lit. a) GDPR.",
      pgdataprivpara4sec5:
        "Data is transmitted, for example, in connection with the use of Google and meta services. Due to the use of these services, data will be transmitted to the United States of America.",
      pgdataprivpara4sec6:
        "The data will only be transmitted if you give us your consent.",
      pgdataprivpara4sec7:
        "The specific details of the recipient, the transmitted personal data and the purpose of the data transfer can be found in the information on the respective processing below.",
      pgdataprivpara4sec8:
        "There is a risk to your personal information as a result of data sharing. In the United States of America, there is no level of data protection comparable to EU law (GDPR) and/or national regulations (e.g. BDSG) or adequate guarantees that ensure the maintenance of an adequate level of data protection. Furthermore, due to the American legal situation, any deficits cannot be compensated for by other specific guarantees. Nevertheless, depending on the service, standard contractual clauses are sometimes used in order to achieve the greatest possible protection for your data. You can find out whether standard contractual clauses are used in the statements on the respective services.",
      pgdataprivpara4sec9:
        "You can revoke your consent at any time with effect for the future. The revocation has no influence on the legality of the processing up to the time of the revocation.",
      pgdataprivhd55:
        "Processing of personal data for contract execution or contract initiation (Art. 6 Para. 1 S. 1 lit. b) GDPR)",
      pgdataprivpara5sec1:
        "If a contract is concluded with us, we use personal data insofar as this is necessary for the execution of the contract or for the implementation of pre-contractual measures. The purposes of the data processing are based on the specific contract content, which you can find in the contract documents.",
      pgdataprivpara5sec2:
        "If a contract already exists with us, we process your data to check that you are our contractual partner and to properly provide the contractual service owed.",
      pgdataprivhd66:
        "Processing of personal data in the context of a balancing of interests (Art. 6 Para. 1 S. 1 lit. f) GDPR)",
      pgdataprivpara6sec1:
        "We process personal data after balancing interests, insofar as this is necessary to protect our interests or the interests of third parties.",
      pgdataprivpara6sec2: "Examples of such purposes are:",
      pgdataprivpara6secli1:
        "     Ensuring the IT security and integrity of our systems,",
      pgdataprivpara6secli2: "     prevention or investigation of crimes,",
      pgdataprivpara6secli3: "     Assertion or defense of legal claims.",
      pgdataprivhd77: "contact",
      pgdataprivpara7sec1:
        "If you contact us by e-mail or telephone, we process the personal data you have provided to answer your request. The legal basis for this is Article 6 Paragraph 1 Clause 1 Letter b) GDPR, but exceptionally, if there is no contractual relationship, Article 6 Paragraph 1 Clause 1 Letter f) GDPR, with the legitimate interest in the proper answering your request. We delete the data after the final processing of your request, provided there is no contractual or legal storage obligation.",
      pgdataprivhd88: "contact form",
      pgdataprivpara8sec1:
        "If you send us an inquiry via our contact form, we will process the data you provide on the basis of your consent in accordance with Article 6 (1) sentence 1 lit. a) GDPR in order to process your inquiry. In principle, your data will be deleted after the request has been processed, unless there is a contractual or legal obligation to retain it. If you provide us with contractually relevant information, we will transfer this to our inventory system.",
      pgdataprivpara8sec2:
        "You can revoke your consent at any time with effect for the future using all of the contact details provided.",
      pgdataprivhd99: "customer satisfaction",
      pgdataprivpara9sec1:
        "As far as we determine your customer satisfaction, this is done on the basis of a legitimate interest within the meaning of art. 6 paragraph 1 sentence 1 lit. f) GDPR. We have a legitimate interest in collecting and analyzing customer opinions and using the results derived from them to improve our offer. In this respect, we only collect the data that is required for this purpose. This serves the purpose of enabling a proper evaluation of the data, as this allows multiple opinions of the same person to be determined. Providing your name and other personal information that you provide as part of the evaluation is voluntary.",
      pgdataprivhd1010: "Order",
      pgdataprivpara10sec1:
        "If you place an order via our website, we need the personal data required to process the order in order to conclude the contract. The legal basis for data processing is Article 6 Paragraph 1 Clause 1 Letter a) GDPR and Article 6 Paragraph 1 Clause 1 Letter b) GDPR, as these are pre-contractual measures.",
      pgdataprivpara10sec2:
        "If a contract is concluded with us, further data processing is based on Article 6 Paragraph 1 Sentence 1 Letter b) GDPR.",
      pgdataprivpara10sec3:
        "You can find our general terms and conditions at: <LINK>",
      pgdataprivpara10sec4:
        "If you contact us within the framework of an existing contractual relationship for a purpose that is necessary for the execution of the contract, we also process this data on the basis of Article 6 (1) sentence 1 lit. b) GDPR.",
      pgdataprivhd1111: "customer account",
      pgdataprivpara11sec1:
        "You have the option of opening a customer account voluntarily, through which your data will be saved as part of the contractual relationship with us. The data is processed on the basis of your consent in accordance with Article 6 Paragraph 1 Clause 1 Letter a) GDPR. When registering, the data entered will be stored revocably. You can delete the data you have entered and the entire account at any time. This does not apply to the data that is absolutely necessary for the execution of the contractual relationship on which the customer account is based.",
      pgdataprivpara11sec2:
        "In some cases, we process such data in the customer account that you have given us when concluding the contract or in the context of the execution of the contract by adding, supplementing and evaluating this to your customer account.",
      pgdataprivhd1212: "Use of cookies",
      pgdataprivpara12sec1:
        "Various cookies may be used during your visit to our website. These are text files that are placed on your computer and enable, among other things, a smooth visit to our website.",
      pgdataprivpara12sec2:
        "In some cases, cookies are necessary to ensure the functionality or IT security of our website. Such function cookies are used on the basis of a legitimate interest in enabling the use of our website, including its functions, in accordance with Article 6 (1) sentence 1 lit. f) GDPR.",
      pgdataprivpara12sec3:
        "We may use other - non-essential - cookies on the basis of Article 6 (1) sentence 1 lit. a) GDPR and therefore on the basis of your consent. The purposes of the cookies used in each case may include:",
      pgdataprivpara12secli1: "     Enabling the use of special functions,",
      pgdataprivpara12secli2:
        "     the (pseudonymized) analysis of user behavior in order to optimize our website,",
      pgdataprivpara12secli3:
        "     Increasing the attractiveness and ease of use of our website,",
      pgdataprivpara12secli4:
        "     Improvement and needs-based design of our offer,",
      pgdataprivpara12sec4: "be.",
      pgdataprivpara12sec5:
        "The use of unnecessary cookies takes place within the framework of so-called usage profiles. You will be assigned a pseudonym under which the usage data will be stored. Your IP address is only stored in abbreviated form, so that a personal assignment of the usage profile is no longer possible.",
      pgdataprivpara12sec6:
        "If we use cookies primarily for the purposes of (re)marketing or the implementation of (social media) plugins, we base this use on your free consent to such data processing and require your consent in this respect. With regard to the individual plugins or tracking tools, we refer to the following detailed explanations.",
      pgdataprivpara12sec7:
        "Most of the cookies we use are deleted from your computer after you close your browser (session cookies). Other types of cookies can remain on your computer and enable us to recognize your computer the next time you visit our site using the user profile that has been created (permanent cookies).",
      pgdataprivpara12sec8:
        "Cookies are used on our site only by ourselves and not by third parties, with the exception of third-party cookies, which are expressly mentioned in this privacy policy.",
      pgdataprivpara12sec9:
        "You can declare your consent by confirming our cookie banner when you visit our website. You can revoke your consent once given at any time with effect for the future.",
      pgdataprivpara12sec10: "We use the following cookies:",
      pgdataprivpara12tablehd1: "             cookie",
      pgdataprivpara12tablehd2: "             Purpose",
      pgdataprivpara12tablehd3: "             storage duration",
      pgdataprivpara12tabletd1: "             Remember login",
      pgdataprivhd1313: "No use of social plugins",
      pgdataprivpara13sec1: "We do not use any social plugins on our website.",
      pgdataprivhd1414: "Google Maps",
      pgdataprivpara14sec1:
        "We use a plugin of the internet service Google Maps on our website. Google Maps is operated by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (",
      pgdataprivpara14sec2:
        "If you agree to the processing of your data by the ",
      pgdataprivpara14sec3:
        "We have no knowledge of the exact content of the transmitted data, nor of their use by Google. In this context, the company denies the connection of the data with information from other Google services and the collection of personal data. However, Google may transfer the information to third parties. If you disable JavaScript in your browser, you prevent Google Maps from running. However, you will then also not be able to use a map display on our website.",
      pgdataprivpara14sec4:
        "You can find out more about the data protection regulations and terms of use for Google Maps here:",
      pgdataprivpara14sec7: "We use Google Fonts in so-called ",
      openresturant: "Restaurant geöffnet",
      pgdataprivpara14sec8:
        "The transfer of data to the USA is permitted based on your consent in accordance with Article 49 (1) sentence 1 lit. a) GDPR. The processing is necessary for a proper presentation of our website and is in this respect both in our interest and in yours. The legal basis for the processing is Article 6 Paragraph 1 Sentence 1 Letter f) GDPR, namely a legitimate interest in being able to present the company's external appearance through a functional website.",
      pgdataprivpara14sec9:
        "You can find more information on the Google websites under the following links:",
      pgdataprivhd1515: "payment service provider",
      pgdataprivpara15sec1:
        "For payment processing, we pass on your payment data to the following payment service providers.",
      pgdataprivpara15sec2:
        "The payment service providers are used on the basis of Article 6 Paragraph 1 Clause 1 Letter b) GDPR (contract processing) and in the interest of a payment process that is as smooth, convenient and secure as possible (Article 6 Paragraph 1 Clause 1 Letter f) GDPR). Insofar as your consent is requested for certain actions, Art. 6 (1) sentence 1 lit. a) GDPR is the legal basis for data processing; Consent can be revoked at any time with effect for the future.",
      pgdataprivpara15sec3:
        "The data is always passed on on the basis of a legal standard or a suitable contract according to Art. 26 or 28 DSGVO, which ensures compliance with all data protection requirements.",
      pgdataprivhd1616:
        "PayPal: You can use PayPal, PayPal Europe S.à.r.l. & Cie. S.C.A., 22-24 Boulevard Royal, 2449 Luxembourg. Your data will be transmitted directly to PayPal for the purpose of payment processing. Payments are processed via virtual accounts or via a virtual credit card. The data that is required for proper payment and contract processing is transmitted.",
      pgdataprivpara16sec1:
        "The processing of your data by PayPal takes place in accordance with Article 6 Paragraph 1 Sentence 1 lit. b) GDPR, insofar as this is necessary for the execution of the contract.",
      pgdataprivpara16sec2:
        "It cannot be ruled out that PayPal will forward your data to third parties for credit and identity checks - insofar as this is necessary to fulfill contractual obligations. Further information on the subject of data protection at PayPal can be found under this link:",
      pgdataprivpara16sec3:
        "PayPal may pass on personal data to affiliated companies and other service providers if this is necessary to fulfill the contract. Insofar as data is transmitted to the USA, this is done on the basis of your consent in accordance with Article 49 (1) sentence 1 lit. a) GDPR.",
      pgdataprivhd1717:
        "Sofortüberweisung: As a means of payment, you can choose Sofortüberweisung, a payment service provided by SOFORT GmbH, Fußbergstraße 1, 82131 Gauting, Germany (hereinafter: SOFORT). Your personal data will be transmitted directly to SOFORT for the purpose of payment processing.",
      pgdataprivpara17sec1:
        "You can find more detailed information on the terms of use and data protection of Sofortüberweisung under ",
      pgdataprivhd1818: "data sharing",
      pgdataprivpara18sec1:
        "We pass on data to other third parties if and to the extent that we have delegated the fulfillment of tasks to them. The data will only be passed on if this is necessary to fulfill the assigned tasks.",
      pgdataprivpara18sec2: "We work with the following companies:",
      "pgdataprivpara18secli1-1":
        "SOFORT GmbH, Fußbergstrasse 1, 82131 Gauting, Germany",
      pgdataprivpara18sec3:
        "Furthermore, service providers can be entrusted with tasks in the following areas, for example:",
      pgdataprivpara18secli1: "IT maintenance",
      pgdataprivpara18secli2: "IT development",
      pgdataprivpara18secli3: "IT delivery",
      pgdataprivpara18secli4: "legal advice",
      pgdataprivpara18sec4:
        "If necessary, we will pass on your personal payment data to a bank commissioned with payment processing (SEPA direct debit or receipt).",
      pgdataprivpara18sec5:
        "The data is always passed on on the basis of a legal standard or a suitable contract according to Art. 26 or 28 DSGVO, which ensures compliance with all data protection requirements.",
      pgdataprivpara18sec6:
        "Otherwise, data will only be passed on in the context of the cases provided for by law, for example in the case of a statutory obligation to provide information to law enforcement authorities. In these cases, the transfer of data is legitimized in accordance with Article 6 Paragraph 1 Clause 1 Letter c) GDPR.",
      pgdataprivhd1919: "Data transfer to a third country",
      pgdataprivpara19sec1:
        "A transfer of data to a third country is intended. This transfer takes place on the basis of the consent you have given. The recipients of the data you have provided are the following companies: ",
      pgdataprivpara19secli1:
        "     2 PayPal Holdings, Inc., 211 North First Street, San Jose, California 95131, USA",
      pgdataprivpara19secli2:
        "     Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (parent company in the USA)",
      pgdataprivpara19sec2:
        "If data is transmitted to a third country on the basis of consent without an adequacy decision or other suitable guarantees being available at the same time, the associated increased risk of data processing must be taken into account on the basis of Article 49 (1) sentence 1 lit be notified during the transfer. However, we would like to assure you that potential risks are successfully minimized thanks to careful selection and constant monitoring of the standards of our contractual partners.",
      pgdataprivhd2020: "Duration of data storage",
      pgdataprivpara20sec1:
        "Your personal data will be deleted by us immediately as soon as the data is no longer required to fulfill contractual and legal obligations or to safeguard our legitimate interests.",
      pgdataprivpara20sec2:
        "In the case of a contractual relationship, personal data is stored at least for as long as is necessary to fulfill contractual obligations and exercise contractual rights. This period can extend beyond the actual contract period, since the data can still be relevant after the end of the contract within the framework of the limitation periods. In addition, deletion can only take place when any retention periods under tax and commercial law have expired.",
      pgdataprivpara20sec3:
        "You can find the criteria for how long cookies are stored in the relevant section.",
      pgdataprivhd2121: "data subject rights",
      pgdataprivpara21sec1:
        "As a person affected by the processing of personal data, you have the following rights:",
      pgdataprivpara21sec2:
        "You have the right to request confirmation as to whether personal data is being processed. If this is the case, you have a right to information about the personal data and to the information listed in Art. 15 DSGVO.",
      pgdataprivpara21sec3:
        "You have the right to request the person responsible to immediately correct incorrect personal data concerning you and, if necessary, to complete incomplete personal data (Article 16 GDPR).",
      pgdataprivpara21sec4:
        "You have the right to demand that the person responsible delete your personal data immediately if one of the reasons listed in paragraph 17 DSGVO applies, e.g. if the data is no longer required for the purposes pursued (right to deletion ).",
      pgdataprivpara21sec5:
        "You have the right to request the person responsible to restrict the processing if one of the conditions listed in Article 18 GDPR is met, e.g. B. if you have lodged an objection to the processing, for the duration of the examination by the person responsible.",
      pgdataprivpara21sec6:
        "You have the right to receive the personal data that you have provided to us in a structured, common and machine-readable format, and you have the right to transmit this data to another person responsible without hindrance from us, provided that the processing of this Data is based on your consent or on a contract and the processing is carried out using automated procedures (Article 20 GDPR). When exercising the right to data portability, you have the right to have the personal data transmitted directly from us to another controller, where technically feasible (right to data portability).",
      pgdataprivpara21sec7:
        "You have the right, for reasons arising from your particular situation, to object at any time to the processing of your personal data, which is based on our legitimate interest. We will then no longer process the personal data unless we can demonstrate compelling legitimate grounds for processing that outweigh your interests, rights and freedoms, or the processing serves to assert, exercise or defend legal claims (Art. 21 GDPR) .",
      pgdataprivpara21sec8:
        "With regard to the exercise of your rights, you can contact us at any time using the contact options offered on our website.",
      pgdataprivhd2222: "Right to object to direct mail",
      pgdataprivpara22sec1:
        "In individual cases, we process personal data in order to operate direct advertising. In this case, you have the right to object at any time to the processing of your personal data for the purpose of such advertising (Art. 21 GDPR).",
      pgdataprivpara22sec2:
        "If you object to the processing for direct marketing purposes, the personal data will no longer be processed for these purposes.",
      pgdataprivpara22sec3:
        "The objection can be made at any time using one of the contact options specified in this data protection declaration or in our imprint.",
      pgdataprivhd2323: "right of appeal",
      pgdataprivpara23sec1:
        "Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the GDPR (Art. 77 GDPR). You can assert this right with a supervisory authority in the member state of your place of residence, your place of work or the place of the alleged infringement. In",
      pgdataprivpara23sec2:
        "Of course, you can also contact us directly if you are dissatisfied or have any questions about data protection. The quickest way to reach our internal contact person for data protection is to use the contact details listed above.",
      pgdataprivhd2424: "Obligation to provide data",
      pgdataprivpara24sec1:
        "In principle, there is no obligation to provide data. However, the provision of data may be necessary to use certain functions or to conclude a contract. If you do not provide the required data, you cannot use certain functions or services or a contract cannot be concluded.",
      pgdataprivhd2525:
        "Updating and changing this data protection information",
      pgdataprivpara26sec26:
        "This data protection information is current as of January 2023.",
      pgdataprivpara27sec27:
        "We reserve the right to update this data protection information if necessary to adapt it to legal and technical developments or in connection with offering new services or products. Should we change our data protection policy, we will place this directly in this declaration on our homepage.",
    },
  },
  de: {
    translation: {
      restaurantoption: "Restaurantoption",
      minimumorder: "Mindestbestellung",
      openresturant: "Offenes Restaurant",
      minutes: "Minuten",
      min: "Mindest",
      colophon: "Kolophon",
      totalpayable: "Total bezahlbar",
      iepleasedontringthebellbabyissleeping:
        "Dh: bitte nicht klingeln. baby schläft.",
      payment: "Zahlungsmethode bitte",
      login: "Anmeldung",
      footercopyrights: "© liefermars.de 2022",
      pickup: "Abholung",
      termsandconditions: "Agb (allgemeine geschaftsbedingungen",
      note: "Anmerkung",
      addnoteoptional: "Anmerkung",
      cashondelivery: "Barzahlung ",
      alreadyregisteredsignin: "Bereits",
      orderandpay: "Bestellen",
      socialmediaandapps: "Besuchen sie uns",
      restaurantratings: "Bewertungen",
      paywithcard: "Mit Karte bezahlen",
      paywithpaypal: "Mit PayPal bezahlen",
      cookies: "Cookies akzeptieren",
      dataprivacy: "Datenschutz",
      emaiaddress: "Emailadresse",
      rememberme: "Erinnere",
      flooroptional: "Etage",
      enteryouremail: "Geben sie ihre e-mail adresse ein",
      opennow: "Geoffnet",
      close: "Geschlossen",
      registerhere: "Hier",
      home: "Homepage",
      yourname: "Ihren",
      japan: "Japanisch",
      loginnow: "Jetzt",
      notamember: "Kein",
      contactus: "Kontakt",
      lebanese: "Lebanesisch",
      homebannertxt: "Liefermars ist eine online essen bestellplatform",
      recovermypassword: "Mein",
      minimumorderamount: "Mindestbestellwert",
      orloginwith: "Oder",
      enterpassword: "Passwort",
      paypal: "Paypal",
      personalinformation: "Persönliche daten",
      zip: "Postleitzahl",
      asap: "Schnellstmöglich",
      streetname: "Strasse",
      repeatyourpassword: "Wiederhole",
      apartmentorsuite: "Wohnung",
      signin: "Einloggen",
      register: "Registrieren",
      location: "Ort",
      indian: "Indisch",
      chinese: "Chinesisch",
      italian: "Italienisch",
      thai: "Thai",
      american: "Amerikanisch",
      turkish: "Turkisch",
      grecian: "Griechisch",
      ordernow: "Jetzt bestellen",
      exploreus: "Entdecken sie uns",
      contact: "Kontakt",
      email: "Email",
      weaccept: "Wir akzeptieren",
      delivery: "Lieferung",
      quality: "Qualität",
      freedelivery: "Kostenlose lieferung  ",
      clearfilter: "Filter löschen",
      menu: "Speisekarte  ",
      reviews: "Bewertungen",
      restaurantinfo: "Restaurantinfos",
      yourshoppingcartisempty: "Dein einkaufswagen ist leer.",
      readmore: "Weiterlesen",
      addtocart: "In den warenkorb legen",
      noreviewfound: "Keine bewertung gefunden",
      deliverycosts: "Versandkosten",
      openinghours: "Öffnungszeiten",
      closedfordelivery: "Wegen auslieferung geschlossen",
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
      totalpurchase: "Gesamteinkauf",
      deliveryfee: "Versandkosten",
      yourorder: "Deine bestellung",
      housenumber: "Hausnummer",
      apartmentoptional: "Wohnung (optional)",
      city: "Stadt",
      companyoptional: "Firma (optional)",
      name: "Name",
      phone: "Telefon",
      youexamplecom: "Du@example.com",
      deliverytime: "Lieferzeit",
      signup: "Anmelden",
      msgprofileupdated: "Ihr profil wurde erfolgreich aktualisiert. ",
      gettoknowus: "Lerne uns kennen",
      msgprofileimgremv:
        "Profilbild ist entfernen. bitte warten sie, bis ihre seite aktualisiert wurde.",
      msgrestnotdeliverzip:
        "Dieses restaurant liefert nicht an ihre aktuelle postleitzahl",
      msgcnfrmemailfrgtpass:
        "Eine bestätigungs-e-mail wurde verschickt. bitte überprüfen sie ihr postfach auf den token-link.",
      msgemailnotreggistered: "Diese e-mail ist nicht registriert.",
      msginvalidemailpass:
        "Ungültige anmeldung, bitte geben sie eine gültige e-mail-adresse und ein gültiges passwort ein",
      msgadrscrtd: "Adresse erfolgreich erstellt. warten sie mal…",
      msgadrsupdt: "Adressaktualisierung erfolgreich. warten sie mal…",
      msgcntctadmn:
        "Es ist etwas passiert, bitte versuchen sie es erneut oder wenden sie sich an den website-administrator.",
      msgpasschngd: "Das passwort wurde erfolgreich geändert",
      msgoldpassentr: "Bitte gültiges altes passwort eingeben.",
      msgreqsndsuccess: "Anfrage wurde erfolgreich gesendet.",
      msgslctdrstrntclsd:
        "Das von ihnen ausgewählte restaurant ist derzeit geschlossen. sie können zur restaurantliste zurückkehren und ein anderes restaurant zum bestellen auswählen.",
      adrsdltd: "Adresse erfolgreich gelöscht",
      noadrsfnd:
        "Keine adresse in der datenbank gefunden . bitte warten sie auf die weiterleitung",
      dnthvorder: "Sie haben keine bestellung.",
      emailalrdyexistreg:
        "Entschuldigung, diese e-mail-adresse existiert bereits. bitte wählen sie eine andere e-mail-adresse für die registrierung.",
      norstfndtharea: "Keine restaurants in diesem bestimmten gebiet gefunden!",
      msgemailnotreggisteredoract:
        "Diese e-mail ist nicht registriert oder bereits aktiviert.",
      usrcrtdscsfl: "Benutzer erfolgreich erstellt. warten sie mal…",
      existingcustq: "Bestandskunde?",
      clicktologin: "Klicken sie hier, um sich einzuloggen",
      forgetpassword: "Passwort vergessen",
      logout: "Ausloggen",
      about: "Uber uns",
      profile: "Profil",
      myreviews: "Meine bewertungen",
      mydeliveryaddress: "Meine lieferadresse",
      address: "Adresse",
      myorder: "Meine bestellungen",
      accountsettings: "Account einstellungen",
      changepassword: "Passwort andern",
      welcometo: "Willkommen zu",
      welcome: "Willkommen",
      abouttxtcontent: "Uber uns text lorem ipsum",
      telephonehelp: "Telefonische hilfe",
      pleasecall: "Rufen sie bitte",
      emailhelp: "E-mail-hilfe",
      plzsendusemail: "Bitte senden sie uns eine e-mail",
      sendyourrequest: "Senden sie ihre anfrage",
      dashboard: "Armaturenbrett",
      suggestedrestaurant: "Empfohlene restaurants",
      addnewaddress: "Neue adresse hinzufugen",
      optional: "Optional",
      save: "Speichern",
      newaddress: "Neue adresse",
      orderdetail: "Bestelldetails",
      profileimage: "Profilbild",
      gender: "Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      other: "Sonstiges",
      chooseyouroption: "Wählen sie ihre option",
      oldpassword: "Altes passwort",
      newpassword: "Neues passwort",
      repeatnewpassword: "Wiederhole das neue passwort",
      goback: "Geh zuruck",
      companyregister: "Firmenregister",
      registeryourrestaurant: "Registrieren Sie Ihr Restaurant",
      registerrestaurant: "Restaurants registrieren",
      loginhistory: "Anmeldeverlauf",
      yourrestaurantname: "Ihr Restaurantname",
      yourrestaurantphone: "Ihr Restaurant-Telefon",
      yourrestaurantemail: "Ihre Restaurant-E-Mail",
      yourrestaurantaddress: "Ihre Restaurantadresse",
      closed: "Abgeschlossen",
      account: "Konto",
      order: "bestellen",
      loadmore: "Mehr laden",
      firstname: "Vorname",
      lastname: "Nachname",
      phoneNumber: "Telefonnummer",
      country: "Land",
      postcode: "Postleitzahl",
      status: "Status",
      norecfnd: "Keine Aufzeichnungen gefunden...",
      active: "Aktiv",
      inactive: "Inaktiv",
      checkout: "Kasse",
      fillinnewadr: "Neue Adresse eingeben",
      pleaseenterhousenum: "Bitte geben Sie Ihre Hausnummer ein.",
      zipcodereq: "Postleitzahl erforderlich",
      sndyrmsg: "Senden Sie Ihre Nachricht",
      submitnow: "Jetzt Absenden",
      areyousure: "Bist du dir sicher?",
      reallywanttodelete:
        "Möchten Sie diese Datensätze wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
      cancel: "Absagen",
      delete: "Löschen",
      or: "oder",
      questions: "Fragen",
      perfmrng: "Leistungsbereich",
      setting: "Einstellung",
      fnameisreq: "Ein gültiger Vorname ist erforderlich.",
      phonenumreq: "Gültig, Ihr Telefon ist erforderlich.",
      lnameisreq: "Ein gültiger Nachname ist erforderlich.",
      validemailreq: "Bitte geben Sie eine gültige Email-Adresse ein.",
      cityreq: "Stadt erforderlich.",
      pleaseenterstrname: "Bitte geben Sie Ihren Straßennamen ein.",
      yourmsg: "Ihre Nachricht",
      subject: "Thema",
      typereviewhere: "Geben Sie hier Überprüfung ein",
      entertitle: "Titel eingeben",
      whatisyrreview: "Was ist Ihre Bewertung",
      searchproduct: "Produkt suchen",
      restaurantsanddishes: "Restaurants und Gerichte",
      bestmatchsort: "Bester Treffer",
      estmdeliverytimesort: "Voraussichtliche Lieferzeit",
      mostpopularsort: "Am beliebtesten",
      minorderamountsort: "Mindest. Bestellbetrag",
      alphabeticalsort: "Alphabetisch",
      previous: "Vorherige",
      next: "Nächste",
      editaddress: "Adresse bearbeiten",
      reviewpending: "Überprüfen Sie Preending",
      pending: "Ausstehend",
      accepted: "Akzeptiert",
      cooking: "Kochen",
      ontheway: "Unterwegs",
      deliverd: "Geliefert",
      cancelled: "Abgesagt",
      writereview: "Bewertung schreiben",
      description: "BEZEICHNUNG",
      quantity: "QUENTITÄT",
      price: "PREIS",
      total: "GESAMT",
      subtotal: "ZWISCHENSUMME",
      grandtotal: "GESAMTSUMME",
      submitreview: "Bewertung abschicken",
      howwasfood: "Wie war das Essen?",
      howwasdelivery: "Wie war die Lieferung?",
      whatwasdeliverytime: "Was war Lieferzeit",
      invoicecreatedoncomputer:
        "Rechnung wurde am Computer erstellt und ist ohne Unterschrift und Siegel gültig.",
      showfilter: "Filter anzeigen",
      noprodfound: "Kein Produkt gefunden",
      savefornextorder:
        "Speichern Sie diese Bemerkungen für Ihre nächste Bestellung.",
      mint: "Min",
      nocategoryfound: "keine Kategorie gefunden.",
      doingbusiness: "Geschäfte machen",
      becomeapartnerrestaurant: "Werden Sie Partner-Restaurant",
      recommendarestaurant: "Empfehlen Sie ein Restaurant",
      termsofservice: "Nutzungsbedingungen",
      privacy: "Privatsphäre",
      deliverylacations: "Lieferorte",
      weusecookiestopersonalizecontent:
        "Wir vervenden cookies, um Inhalte und Anzeigen zu personalisieren. Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren - alle informationen hierzu finden Sie in den Datenschutzbeschtimungen.",
      notwindig: "Notwindig",
      praferenzen: "Präferenzen",
      statistiken: "Statistiken",
      marketing: "Marketing",
      allowallcookies: "Alle Cookies zulassen",
      confirmselection: "Auswahl bestätigen",
      viewdetails: "Details anzeigen ",
      cookiestext:
        "Diese Webseite verwendet cookies, um bestmöglische Funktionalität zu können. Weitere Information.",
      cookiessetting: "Cookie-Einstellung",
      onlyessentialcookies: "Nur essentielle Cookies",
      acceptallcookies: "Alle Cookies akzeptieren",
      pgabouttitle: "Über uns",
      pgabouthd1: "Über uns",
      pgaboutpara1:
        "Liefermars.de wurde im Januar 2023 in Ludwigshafen, Deutschland, mit der Vision gegründet, den bestehenden Liefermechanismus für Lebensmittel europaweit in eine digitale Welt zu verwandeln. Wir spielen nicht nur eine Vermittlerrolle, sondern arbeiten auch am Kapazitätsaufbau neu entstehender Unternehmen im Lebensmittelsektor. Mit einem hochqualifizierten Team bietet Liefermars.de kundenorientierte Dienstleistungen, einschließlich Informationsaustausch zwischen Benutzern und Dienstanbietern, technischem 6-Stunden-Support und Beschwerdebearbeitungsmechanismen. Liefermars.de ist ins Leben gerufen worden, um den Essenslieferservice für Kunden überall SMART und einfach zu gestalten. Liefermars.de ist eine einzigartige konsolidierte Plattform, die Nutzern die Möglichkeit bietet, ihr Lieblingsessen beim nächstgelegenen Partnerrestaurant zu bestellen. Die p…",
      pgtermsnservtitle: "Terms of Service",
      pgtermsnservhd1: "I. Geltungsbereich, Vertragssprache",
      pgtermsnservpara1sec1:
        "(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend: AGB), finden Anwendung auf alle zwischen Ihnen und der Digicom Company, Brandenburger Straße 11, 67065 Ludwigshafen, (HRB-Nummer, Umsatzsteuer-ID-Nummer [KPB1] ) vertreten durch Herrn Hamayoon Rasoly, Brandenburger Str. 11, 67065 Ludwigshafen (nachfolgend: Digicom oder wir) über die Plattform liefermars.de (nachfolgend: Liefermars), geschlossenen Verträge. ",
      pgtermsnservpara1sec2:
        "(2) Für Liefermars und die damit verbundenen Leistungen zwischen uns und Ihnen gelten ausschließlich die nachfolgenden AGB in ihrer zum Zeitpunkt der Bestellung gültigen Fassung. Sofern Sie die Dienstleistungen von Liefermars nutzen, erklären Sie sich mit den AGB einverstanden. Entgegenstehende oder von unseren AGB abweichende Bedingungen erkennen wir nur an, wenn wir ausdrücklich schriftlich der Geltung zustimmen.",
      pgtermsnservpara1sec3:
        "(3) Die für den Vertragsschluss zur Verfügung stehende Sprache ist ausschließlich Deutsch. Übersetzungen dieser Geschäftsbedingungen in andere Sprachen dienen lediglich zu Ihrer Information. Bei etwaigen Unterschieden zwischen den Sprachfassungen hat der deutsche Text Vorrang.",
      pgtermsnservhd2: "II. Vertragsinhalt, Zustandekommen des Vertrags",
      pgtermsnservpara2sec1:
        "(1) Wir helfen Ihnen bei der Bestellung und Vermittlung von Lebensmitteln, Gerichten, Speisen und Getränken (nachfolgend: „Waren“) von kooperierenden Restaurants, Catering- oder Partyservice sowie jede Art von professioneller Bereitstellung von Waren (nachfolgend: „Partnerrestaurant“). Das Partnerrestaurant liefert Ihnen die Bestellung zu einer bestimmten [KB2] Tageszeit an die gewünschte Adressen, sofern diese per Absprache zwischen Ihnen und uns gestattet wurde. Die von unseren Partnerrestaurants zu erbringenden Leistungen sind nicht Teil unseres Services. ",
      pgtermsnservpara2sec2:
        "(2) Wir veröffentlichen und vermitteln auf Liefermars Angebote der jeweiligen Partnerrestaurants. Der Vertrag über die Zubereitung und den Erwerb der Ware [sowie ihrer Lieferung] kommt unmittelbar zwischen Ihnen und dem Restaurant zustande. Es gelten insoweit die Vertragsbedingungen des Partnerrestaurants, denen Sie im Rahmen der Angebotsabgabe zustimmen. Für die Vollständigkeit und Richtigkeit der Angebote übernehmen wir keine Haftung. Für die ordnungsgemäße Beschaffenheit der Ware und die ordnungsgemäße Lieferung ist das jeweilige Partnerrestaurant zuständig.",
      pgtermsnservpara2sec3:
        "(3) Durch Anklicken des „Zahlungspflichtig bestellen“-Buttons [KB3] im letzten Schritt des Bestellprozesses geben Sie ein verbindliches Angebot zur Buchung der in der Bestellübersicht angezeigten Waren und Dienstleistungen ab. Unmittelbar nach Absenden der Bestellung erhalten Sie eine Bestellbestätigung, die jedoch noch keine Annahme Ihres Vertragsangebotes darstellt. Ein Vertrag zwischen Ihnen und uns kommt zustande, sobald wir Ihre Bestellung durch eine gesonderte E-Mail annehmen. [KB4] Bitte prüfen Sie regelmäßig den SPAM-Ordner Ihres E-Mail-Postfachs. ",
      pgtermsnservhd3:
        "III. Technische Schritte bis zum Vertragsschluss und Berichtigung von Eingabefehlern",
      pgtermsnservpara3sec1:
        "Im Rahmen des Bestellprozesses legen Sie zunächst die gewünschten Waren in den Warenkorb. Dort können Sie jederzeit die gewünschte Stückzahl ändern oder ausgewählte Waren oder Dienstleistungen ganz entfernen. Sofern Sie die Ware dort hinterlegt haben, gelangen Sie jeweils durch Klicks auf die „Weiter“-Buttons zunächst auf eine Seite, auf der Sie Ihre Daten eingeben und anschließend die Versand- und Bezahlart auswählen können. Schließlich öffnet sich eine Übersichtsseite, auf der Sie Ihre Angaben überprüfen können. Ihre Eingabefehler (z.B. bzgl. Bezahlart, Daten oder der gewünschten Stückzahl) können Sie korrigieren, indem Sie bei dem jeweiligen Feld auf „Bearbeiten“ klicken. Falls Sie den Bestellprozess komplett abbrechen möchten, können Sie auch einfach Ihr Browser-Fenster schließen. Ansonsten wird nach Anklicken des Bestätigungs-Buttons „Zahlungspflichtig bestellen“ Ihre Erklärung verbindlich i.S.d. Ziffer 2 Abs.?2 dieser AGB. [KB5]  ",
      pgtermsnservhd4: "IV. Speicherung des Vertragstextes",
      pgtermsnservpara4sec1:
        "Die Vertragsbestimmungen mit Angaben zu den bestellten Waren bzw. gebuchten Dienstleistungen einschließlich dieser AGB und der Widerrufsbelehrung werden Ihnen per E-Mail mit Annahme des Vertragsangebotes bzw. mit der Benachrichtigung hierüber zugesandt. Eine Speicherung der Vertragsbestimmungen durch uns erfolgt nicht. [KB6]  ",
      pgtermsnservhd5:
        "V. Ihre Mitwirkungspflichten zur Ermöglichung der Lieferung[KB7] ",
      pgtermsnservpara5sec1:
        "(1) Sie sind verpflichtet auf Liefermars Ihre aktuellen Kontaktdaten (Name, Adresse, Telefonnummer und E-Mail-Adresse) anzugeben und darauf zu achten, diese aktuell zu halten. Zum Zeitpunkt der erwarteten Lieferung Ihrer Bestellung sollten Sie per E-Mail oder Telefon erreichbar sein, um Probleme bei der Zustellung zu beheben. Andernfalls kann eine Bestellung gegebenenfalls nicht oder nicht rechtzeitig übergeben werden. Im Falle einer durch Sie verschuldeten Nichterreichbarkeit ist der Lieferant berechtigt die Ware an einem geeigneten Ort in der Nähe der Lieferadresse abzustellen. In diesem Fall übernehmen wir keine Verantwortung für Qualitätsverlust oder den Verbleib der Ware. Alternativ können die bestellten Ware auch zurück zum Partnerrestaurant gebracht werden, worüber Sie unverzüglich informiert werden. Sie können die Ware in diesem Fall dort abholen.",
      pgtermsnservpara5sec2:
        "(2) Sofern das Partnerrestaurant die Ware zur Abholung ermöglicht und sie diese Option bei der Bestellung auswählen, verpflichten Sie sich dazu zur angegebenen Zeit am Abholort anwesend zu sein. Andernfalls kann ein Qualitätsverlust der Ware eintreten, wofür wir keine Verantwortung übernehmen.",
      pgtermsnservpara5sec3:
        "(3) Eine Auslieferung alkoholischer Getränke ist nur an Personen gestattet, die das jeweils gesetzlich vorgeschriebene erforderliche Mindestalter erreicht haben. Daher können Sie aufgefordert werden sich auszuweisen. Falls Sie das nicht können, dürfen die alkoholischen Waren nicht ausgehändigt werden.",
      pgtermsnservhd6: "VI. Preise und Zahlungsbedingungen",
      pgtermsnservpara6sec1:
        "(1) Alle auf Liefermars angegebenen Preise verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer.",
      pgtermsnservpara6sec2:
        "(2) Der Rechnungsbetrag wird mit Eingang der Bestellbestätigung bei Ihnen fällig. Anfallende Lieferkosten sind jeweils im Bestellformular angegeben und werden von uns gesondert auf der Rechnung ausgewiesen.",
      pgtermsnservpara6sec3:
        "(3) Das jeweilige Partnerrestaurant, mit dem Sie einen Vertrag über Liefermars abgeschlossen haben, ermächtigt uns zur Annahme Ihrer Zahlung.",
      pgtermsnservpara6sec4:
        "(4) Die Zahlung ist online oder in bar möglich. Eine Online-Zahlung ist mittels Kreditkarte, Paypal, … [KB8]  möglich. ",
      pgtermsnservhd7: "VII. Registration of a customer account [KB9] ",
      pgtermsnservpara7sec1:
        "(1) Sie können auf Liefermars Ware als Gast oder als registrierter Benutzer bestellen. Als registrierter Benutzer müssen Sie nicht jedes Mal Ihre persönlichen Daten angeben, sondern Sie können sich vor oder im Rahmen einer Bestellung einfach mit Ihrer E-Mail-Adresse und dem von Ihnen bei Registrierung frei gewählten Passwort in Ihrem Kundenkonto anmelden. Allein mit der Registrierung besteht keinerlei Zahlungsverpflichtung hinsichtlich der auf Liefermars angebotenen  Waren. Mit der Anmeldung geben Sie Ihre E-Mail-Adresse an und wählen ein Passwort. Sie verpflichten sich dazu, keine falschen Angaben zur Person zu machen und diese bei Änderungen vor einer weiteren Nutzung zu aktualisieren.",
      pgtermsnservpara7sec2:
        "(2) Bei der Nutzung des Kundenkontos sind Sie dafür verantwortlich, dass die Vertraulichkeit des Kontos, Passworts und die Zugangsbeschränkung zu seinen Endgeräten gewahrt bleiben. Im Rahmen der rechtlich geltenden Bestimmungen tragen Sie die Verantwortung für alle Handlungen, die über Ihr Konto und die Verwendung des Passworts erfolgen. Sofern Ihnen bekannt wird, dass ein Dritter Kenntnis von Ihrem Passwort erhalten haben könnte, sollten Sie uns informieren und entsprechende Maßnahmen zum Schutz der Daten in die Wege leiten.",
      pgtermsnservpara7sec3:
        "(3) Sie dürfen den Zugang zum Kundenkonto nicht zu missbräuchlichen oder rechtswidrigen Zwecken nutzen. Bei Verstößen gegen diese Nutzungsbedingungen oder bei sonstigem rechtswidrigem Verhalten behalten wir uns vor, Ihr Konto zu sperren.",
      pgtermsnservpara7sec4:
        "(4) Die in Ihrem Kundenkonto gespeicherte Angaben zur Zahlungsart können Sie jederzeit ändern oder löschen.",
      pgtermsnservpara7sec5:
        "(5) Sie haben die Möglichkeit Ihr Konto über den [Bezeichnung einfügen]- Button, den Sie über […] erreichen, zu löschen. [KB10] Der entsprechende Kontozugang wird dann deaktiviert und die von uns gespeicherten personenbezogenen Daten werden gelöscht, sobald der Zweck ihrer Erhebung entfallen ist. ",
      pgtermsnservhd8: "VIII. Bewertungen durch Kunden",
      pgtermsnservpara8sec1:
        "(1) Sie haben die Möglichkeit auf Liefermars unsere Partnerrestaurants zu bewerten und Rezensionen zu verfassen. Für den Inhalt dieser Rezensionen sind die Rezensenten selbst verantwortlich. Es besteht kein Anspruch uns gegenüber auf die Möglichkeit zur Erstellung von Rezensionen bzw. deren dauerhafter Speicherung und Veröffentlichung.",
      pgtermsnservpara8sec2:
        "(2) Wir behalten uns vor Rezensionen, die Rechtsverstöße beinhalten bzw. darstellen sowie unangemessene oder sachfremde Inhalte jederzeit und ohne Hinweis zu löschen.",
      pgtermsnservhd9: "IX. Verarbeitung Ihrer personenbezogenen Daten",
      pgtermsnservpara9sec1:
        "Im Rahmen der Anmeldung und Nutzung des Kundenkontos bzw. der Bestellung als Gast werden personenbezogenen Daten verarbeitet. Genaue Informationen über die Datenverarbeitungsvorgänge, Rechtsgrundlagen und Ihre Rechte finden Sie in der Datenschutzerklärung für das Kundenportal unter [Hier Link zur Datenschutzerklärung einfügen].",
      pgtermsnservhd10: "X. Widerrufsrecht",
      pgtermsnservpara10sec1:
        "(1) Sofern Sie Verbraucher sind, steht Ihnen ein Widerrufsrecht zu. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Die Ausnahmen vom Widerrufsrecht sind im nachfolgenden Absatz (2) geregelt.",
      pgtermsnservhd11: "Widerrufsbelehrung",
      pgtermsnservpara11sec1:
        "  Widerrufsrecht  Sie haben das Recht, binnen vierzehn Tagen ohne Angaben von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Digicom [KB11]  Company, Brandenburger Straße 11, 67065 Ludwigshafen, support@liefermars.de) mittels einer eindeutigen Erklärung (zB ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.  ",
      pgtermsnservhd12: "Folgen des Widerrufs",
      pgtermsnservpara12sec1:
        "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstige Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrages bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
      pgtermsnservpara12sec2:
        "Wir können die Rückzahlung verweigern, bis wir die Ware wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.",
      pgtermsnservpara12sec3:
        "Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrages unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.",
      pgtermsnservpara12sec4:
        "Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.",
      pgtermsnservpara12sec5:
        "Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.",
      pgtermsnservpara12sec6:
        "(2) Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung, soweit es sich um Lieferungen von Waren handelt,",
      pgtermsnservpara12sec7:
        "a. die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl der Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB,",
      pgtermsnservpara12sec8:
        "b. die schnell verderben können oder deren Verfallsdatum schnell überschritten würde (§ 312g Abs. 2 Nr. 2 BGB),",
      pgtermsnservpara12sec9:
        "c. die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde (§ 312g Abs. 2 Nr. 3 BGB).w",
      pgtermsnservpara12sec10:
        "i.e. if these were inseparably mixed with other goods after delivery due to their nature (§ 312g Para. 2 No. 4 BGB).",
      pgtermsnservpara12sec11:
        "(3) We inform you about the model cancellation form according to the legal regulation as follows:",
      pgtermsnservpara12sec12: "Muster-Widerrufsformular",
      pgtermsnservpara12sec121:
        "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.) &nbsp; — An Digicom [KB12] &nbsp;Company, Brandenburger Straße 11, 67065 Ludwigshafen, support@liefermars.de: — Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*) — Bestellt am (*)/erhalten am (*) — Name des/der Verbraucher(s) — Anschrift des/der Verbraucher(s) — Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier) — Datum (*) Unzutreffendes streichen&nbsp; ",
      pgtermsnservhd13: "XI. Limitation of Liability",
      pgtermsnservpara13sec1:
        "(1) We exclude our liability for slightly negligent breaches of duty, unless damage to life, limb or health or guarantees are affected or claims under the Product Liability Act are affected. Furthermore, liability for the breach of essential contractual obligations (obligations whose fulfillment is essential for the proper execution of the contract and on the observance of which the contractual partner regularly relies and may rely) remains unaffected. In cases of the previous sentence, liability is limited to the foreseeable, contract-typical damage.",
      pgtermsnservpara13sec2:
        "(2) The limitation of liability set out in paragraph 1 also applies to our legal representatives and vicarious agents if claims are asserted directly against them.",
      pgtermsnservhd14: "XII. Complaints and Dispute Resolution",
      pgtermsnservpara14sec1:
        "(1) We process all complaints regarding our service and the use of Liefermars as well as the provision of the customer account carefully and properly. You can address your complaints to us via any of the contact options available on our website. You can reach us in particular via the following contact details: [KB13] ",
      pgtermsnservpara14sec2:
        "(2) The respective partner restaurant is solely responsible for complaints relating to the ordering and delivery of goods from our partner restaurants. We will forward your complaint in this regard to the partner restaurant as soon as possible.",
      pgtermsnservpara14sec3:
        "(3) The European Commission provides a platform for online Dispute resolution (OS) ready. Our email address is:        [KB14] ",
      pgtermsnservpara14sec4:
        "(4) We are neither obliged nor willing to participate in a dispute settlement procedure under the Consumer Dispute Settlement Act (VSBG).",
      pgtermsnservhd15: "XIII. Final Provisions",
      pgtermsnservpara15sec1:
        "(1) The law of the Federal Republic of Germany shall apply to the exclusion of the UN Sales Convention if",
      pgtermsnservpara15sec2:
        "a. you have your habitual residence in Germany, or",
      pgtermsnservpara15sec3:
        "b. Your habitual residence is in a country that is not a member of the European Union.",
      pgtermsnservpara15sec4:
        "In the event that you have your habitual residence in a member state of the European Union, the applicability of German law also applies, whereby mandatory provisions of the state in which you have your habitual residence remain unaffected.",
      pgtermsnservpara15sec5:
        "(2) If you had your domicile or habitual abode in Germany when the contract was concluded and either relocated from Germany at the time we brought an action or your domicile or habitual abode is unknown at that time, the place of jurisdiction for all disputes is our registered office company in Ludwigshafen.",
      pgtermsnservpara15sec6:
        "(3) Should individual provisions of this contract be ineffective, this shall not affect the rest of the contract",
      pgdataprivtitle: "Data Privacy",
      pgdataprivhd11: "Kontaktdaten des Verantwortlichen",
      pgdataprivpara1sec1:
        "Wir begrüßen Sie auf unserer Webseite. Der Schutz Ihrer Daten ist uns sehr wichtig. Deshalb zeigen wir Ihnen nachfolgend auf, wie wir Ihre personenbezogenen Daten verarbeiten.",
      pgdataprivhd22: "Allgemeine Verarbeitung von Besucherdaten",
      pgdataprivpara2sec1:
        "Die Nutzung unserer Webseite ist grundsätzlich ohne die Angabe personenbezogener Daten möglich.",
      pgdataprivpara2sec2:
        "Wir weisen jedoch darauf hin, dass auch in diesem Fall Zugriffsdaten erhoben und in den Server-Log-Files gespeichert werden. Hierbei handelt es sich insbesondere um folgende Daten:",
      pgdataprivpara2sec3:
        "Diese Informationen werten wir grundsätzlich in anonymisierter Form zur Abwehr von Angriffen und zur Verbesserung unseres Angebots aus (Verarbeitung von personenbezogenen Daten im Rahmen einer Interessenabwägung gem. Art. 6 Abs. 1 S. 1 lit. f) DSGVO) und löschen diese anschließend. Die Daten sind regelmäßig von uns nicht auf Ihre Person rückführbar und werden auch nicht mit anderen Daten zusammengeführt.",
      pgdataprivpara2sec4:
        "Bei konkreten Anhaltspunkten für eine rechtswidrige Nutzung behalten wir uns jedoch vor, die Daten nachträglich auszuwerten.",
      pgdataprivhd33: "Datenkategorien; Datenquellen",
      pgdataprivpara3sec1:
        "Grundsätzlich verarbeiten wir die personenbezogenen Daten, die im Zusammenhang mit der Benutzung unserer Webseite durch Sie übermittelt werden oder welche Sie uns im Rahmen einer Anfrage, eines vorvertraglichen Rechtsverhältnisses oder einer Vertragsbeziehung mitteilen. Im Einzelfall und soweit dies im Rahmen der Vertragserfüllung erforderlich ist, verarbeiten wir zudem personenbezogene Daten, die aus öffentlich zugänglichen Quellen (z. B. Handelsregister, Schuldnerverzeichnisse, Internet) in zulässiger Weise entnommen oder uns zulässigerweise von Dritten (z. B. Auskunfteien) übermittelt wurden.",
      pgdataprivpara3sec2:
        "Hierbei kann es sich um technische Sie betreffende Daten (IP-Adresse, Browsertyp), persönliche Daten (Name, Geburtstag, gesetzlich Vertretungsberechtigte), Adressdaten (Adresse, E-Mail-Adresse, Ansprechpartner), Finanzdaten (Name des Kontoinhabers, IBAN, BIC), Vertragsdaten (Vertragslaufzeit, erworbene Leistungen, Stornierungen), Kommunikationsdaten (Schriftwechsel, E-Mail-Verkehr), Werbedaten (Werbeanschreiben) sowie weitere, vergleichbare Kategorien personenbezogener Daten handeln.",
      pgdataprivpara3sec3:
        "Wir verarbeiten beim Aufruf unsere Webseite auch Standortdaten wie die Position des Geräts, Ihres Haushalts und vergleichbare Standortdaten. Die Verarbeitung erfolgt zu dem Zweck Ihnen ein individuelles Angebot für Restaurants in Ihrer Nähe zu ermöglichen. Datenverarbeitung erfolgt in diesen Fällen ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a) DSGVO.",
      pgdataprivhd44:
        "Verarbeitung von personenbezogenen Daten nach Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)",
      pgdataprivpara4sec1:
        "Wir holen von Ihnen im Einzelfall Einwilligungen für bestimmte, im Zusammenhang mit der Datenerhebung ausdrücklich bezeichnete Zwecke ein, beispielsweise für die Einholung von Standortdaten.",
      pgdataprivpara4sec2:
        "Eine Datenverarbeitung erfolgt in diesen Fällen ausschließlich auf Grundlage Ihrer Einwilligung. Es kann sein, dass die Bearbeitung Ihres Anliegens ohne Ihre Einwilligung nicht möglich ist und somit von dieser abhängig gemacht werden muss. Die Verarbeitung der Daten erfolgt ausschließlich für den bzw. die ausdrücklich genannten Zwecke.",
      pgdataprivpara4sec3:
        "Sie können Ihre erteilten Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf hat auf die Rechtmäßigkeit der Verarbeitungen bis zum Zeitpunkt des Widerrufs keinen Einfluss.",
      pgdataprivpara4sec4:
        "Soweit eine Übermittlung personenbezogener Daten in ein Drittland erfolgt, halten wir die datenschutzrechtlichen Vorgaben hierfür dadurch ein, dass der Datenweitergabe Standardvertragsklauseln zugrunde liegen oder wir Ihre Einwilligung zu dieser nach Art. 49 Abs. 1 S. 1 lit. a) DSGVO einholen.",
      pgdataprivpara4sec5:
        "Eine Datenübermittlung erfolgt z.B. im Zusammenhang mit der Verwendung von Google- und Meta-Diensten. Aufgrund der Verwendung dieser Dienste werden Daten in die Vereinigten Staaten von Amerika übermittelt.",
      pgdataprivpara4sec6:
        "Die Datenübermittlung erfolgt nur, sofern Sie uns Ihre Einwilligung erteilen.",
      pgdataprivpara4sec7:
        "Die konkrete Angabe des Empfängers, der übermittelten personenbezogenen Daten sowie des Zwecks der Datenweitergabe können Sie aus den Hinweisen zu der jeweiligen Verarbeitung weiter unten entnehmen.",
      pgdataprivpara4sec8:
        "Aufgrund der Datenweitergabe besteht für Ihre personenbezogenen Daten ein Risiko. In den Vereinigten Staaten von Amerika besteht kein dem EU-Recht (DSGVO) und / oder nationalen Vorschriften (z.B. BDSG) vergleichbares Datenschutzniveau bzw. hinreichende Garantien, die die Wahrung eines adäquaten Datenschutzniveaus gewährleisten. Etwaige Defizite können im Übrigen aufgrund der amerikanischen Rechtslage nicht durch andere spezifische Garantien ausgeglichen werden. Nichtsdestotrotz werden, je nach Dienst, zum Teil Standardvertragsklauseln eingesetzt, um einen größtmöglichen Schutz für Ihre Daten zu erreichen. Ob Standardvertragsklauseln eingesetzt werden, können Sie den Ausführungen zu den jeweiligen Diensten entnehmen.",
      pgdataprivpara4sec9:
        "Sie können Ihre erteilten Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf hat auf die Rechtmäßigkeit der Verarbeitungen bis zum Zeitpunkt des Widerrufs keinen Einfluss.",
      pgdataprivhd55:
        "Verarbeitung von personenbezogenen Daten zur Vertragsabwicklung oder Vertragsanbahnung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)",
      pgdataprivpara5sec1:
        "Sofern ein Vertrag mit uns zustande kommt, verwenden wir personenbezogene Daten, soweit dies zur Vertragsabwicklung bzw. zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. Die Zwecke der Datenverarbeitung richten sich nach den konkreten Vertragsinhalten, die Sie den Vertragsunterlagen entnehmen können.",
      pgdataprivpara5sec2:
        "Sofern ein Vertrag bereits mit uns besteht, verarbeiten wir Ihre Daten, um zu prüfen, dass Sie unser Vertragspartner sind sowie, um die geschuldete vertragliche Leistung ordnungsgemäß zu erbringen.",
      pgdataprivhd66:
        "Verarbeitung von personenbezogenen Daten im Rahmen einer Interessenabwägung (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)",
      pgdataprivpara6sec1:
        "Wir verarbeiten personenbezogene Daten nach Interessenabwägung, soweit dies zur Wahrung unserer Interessen oder der Interessen Dritter erforderlich ist.",
      pgdataprivpara6sec2: "Beispiele solcher Zwecke sind:",
      pgdataprivpara6secli1:
        "    Sicherstellung der IT-Sicherheit und Integrität unserer Systeme,",
      pgdataprivpara6secli2: "    Verhinderung oder Aufklärung von Straftaten,",
      pgdataprivpara6secli3:
        "    Geltendmachung bzw. Abwehr rechtlicher Ansprüche.",
      pgdataprivhd77: "Kontaktaufnahme",
      pgdataprivpara7sec1:
        "Wenn Sie mit uns per E-Mail oder Telefon Kontakt aufnehmen, verarbeiten wir die von Ihnen mitgeteilten personenbezogenen Daten zur Beantwortung Ihrer Anfrage. Rechtsgrundlage hierfür ist grundsätzlich Art. 6 Abs. 1 S. 1 lit. b) DSGVO, ausnahmsweise jedoch, soweit kein Vertragsbezug besteht, Art. 6 Abs. 1 S. 1 lit. f) DSGVO, wobei das berechtigte Interesse in der ordnungsgemäßen Beantwortung Ihrer Anfrage liegt. Wir löschen die Daten nach der abschließenden Bearbeitung Ihrer Anfrage, sofern sich keine vertragliche oder gesetzliche Aufbewahrungspflicht ergibt.",
      pgdataprivhd88: "Kontaktformular",
      pgdataprivpara8sec1:
        "Sofern Sie uns eine Anfrage über unser Kontaktformular senden, verarbeiten wir die von Ihnen angegebenen Daten aufgrund Ihrer Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a) DSGVO, um Ihre Anfrage zu bearbeiten. Grundsätzlich werden Ihre Daten nach Bearbeitung der Anfrage gelöscht, sofern sich keine vertragliche oder gesetzliche Aufbewahrungspflicht ergibt. Sofern Sie uns vertraglich relevante Informationen mitteilen, übertragen wir diese in unser Bestandssystem.",
      pgdataprivpara8sec2:
        "Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft über alle angegebenen Kontaktdaten widerrufen.",
      pgdataprivhd99: "Kundenzufriedenheit",
      pgdataprivpara9sec1:
        "Soweit wir Ihre Kundenzufriedenheit ermitteln erfolgt dies aufgrund eines berechtigten Interesses im Sinne des art. 6 Abs. 1 S. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, Kundenmeinungen zu erfassen, zu analysieren und anhand der daraus abgeleiteten Ergebnisse unser Angebot zu verbessern. Insoweit erheben wir nur diejenigen Daten, welche für diesen Zweck erforderlich sind, Dies dient dem Zweck, eine ordnungsgemäße Auswertung der Daten zu ermöglichen, da hierdurch mehrmalige Meinungen derselben Person ermittelt werden können. Die Angabe Ihres Namens sowie weitere persönliche Angaben, die Sie im Rahmen der Bewertung abgeben, erfolgt freiwillig.",
      pgdataprivhd1010: "Bestellung",
      pgdataprivpara10sec1:
        "Bei einer Bestellung über unsere Webpräsenz benötigen wir für den Vertragsabschluss die zur Abwicklung der Bestellung erforderlichen personenbezogenen Daten. Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. a) DSGVO sowie Art. 6 Abs. 1 S. 1 lit. b) DSGVO, da es sich um vorvertragliche Maßnahmen handelt.",
      pgdataprivpara10sec2:
        "Soweit ein Vertrag mit uns zustande kommt beruht die weitere Datenverarbeitung auf Art. 6 Abs. 1 S. 1 lit. b) DSGVO.",
      pgdataprivpara10sec3:
        "Unsere Allgemeinen Geschäftsbedingungen finden Sie unter: <LINK>",
      pgdataprivpara10sec4:
        "Soweit Sie uns im Rahmen einer bestehenden Vertragsbeziehung zu einem Zweck, der für die Vertragsdurchführung erforderlich ist, kontaktieren, verarbeiten wir diese Daten ebenfalls auf Grundlage des Art. 6 Abs. 1 S. 1 lit. b) DSGVO.",
      pgdataprivhd1111: "Kundenkonto",
      pgdataprivpara11sec1:
        "Sie haben die Möglichkeit, freiwillig ein Kundenkonto zu eröffnen, durch das Ihre Daten im Rahmen des Vertragsverhältnisses mit uns gespeichert werden. Die Datenverarbeitung erfolgt aufgrund Ihrer Einwilligung gem. Art. 6 Abs. 1 S. 1 lit. a) DSGVO. Bei einer Registrierung werden die eingegebenen Daten widerruflich gespeichert. Sie können die von Ihnen eingegebenen Daten sowie das gesamte Konto jederzeit löschen. Dies gilt nicht für diejenigen Daten, welche für die Durchführung des dem Kundenkonto zugrundeliegenden Vertragsverhältnisses zwingend notwendig sind.",
      pgdataprivpara11sec2:
        "Teilweise verarbeiten wir im Kundenkonto solche Daten, die Sie uns bei Vertragsschluss oder im Rahmen der Vertragsdurchführung mitgeteilt haben, indem wir diese Ihrem Kundenkonto beifügen, ergänzen und auswerten.",
      pgdataprivhd1212: "Verwendung von Cookies",
      pgdataprivpara12sec1:
        "Im Rahmen Ihres Besuchs auf unserer Webseite können verschiedene Cookies zum Einsatz kommen. Hierbei handelt es sich um Textdateien, die auf Ihrem Rechner platziert werden und unter anderem einen reibungslosen Ablauf des Besuchs unserer Webseite ermöglichen.",
      pgdataprivpara12sec2:
        "Teilweise sind Cookies notwendig, um die Funktionalität oder die IT-Sicherheit unserer Webseite gewährleisten zu können. Der Einsatz solcher Funktion-Cookies erfolgt auf Basis eines berechtigten Interesses an der Ermöglichung der Nutzung unserer Webseite inkl. ihrer Funktionen nach Art. 6 Abs. 1 S. 1 lit. f) DSGVO.",
      pgdataprivpara12sec3:
        "Weitere – nicht notwendige – Cookies setzen wir gegebenenfalls auf Basis von Art. 6 Abs. 1 S. 1 lit. a) DSGVO ein und mithin auf Grundlage Ihrer Einwilligung. Zwecke der jeweils eingesetzten Cookies können unter anderem:",
      pgdataprivpara12secli1:
        "    Die Ermöglichung der Nutzung besonderer Funktionen,",
      pgdataprivpara12secli2:
        "    die (pseudonymisierte) Analyse des Nutzungsverhaltens, um unsere Webseite zu optimieren,",
      pgdataprivpara12secli3:
        "    Erhöhung der Attraktivität sowie des Nutzungskomforts unserer Webseite,",
      pgdataprivpara12secli4:
        "    Verbesserung und bedarfsgerechte Gestaltung unseres Angebots,",
      pgdataprivpara12sec4: "sein.",
      pgdataprivpara12sec5:
        "Der Einsatz von nicht notwendigen Cookies erfolgt im Rahmen von sogenannten Nutzungsprofilen. Ihnen wird hierbei ein Pseudonym zugeteilt, unter dem die Speicherung der Nutzungsdaten erfolgt. Ihre IP-Adresse wird ausschließlich in gekürzter Form gespeichert, so dass eine persönliche Zuordnung des Nutzungsprofils grundsätzlich nicht mehr möglich ist.",
      pgdataprivpara12sec6:
        "Sofern wir vor allem zu Zwecken des (Re-)Marketings oder der Implementierung von (Social Media-)Plugins Cookies einsetzen, stützen wir diesen Einsatz auf Ihre freie Zustimmung zu einer solchen Datenverarbeitung und benötigen insoweit Ihre Einwilligung. Hinsichtlich der einzelnen Plugins bzw. Trackingtools verweisen wir auf nachfolgende, detaillierte Ausführungen.",
      pgdataprivpara12sec7:
        "Die meisten von uns verwendeten Cookies werden nach Schließen des Browsers wieder von Ihrem Computer gelöscht (Sitzungs-Cookies). Andere Arten von Cookies können auf Ihrem Rechner verbleiben und ermöglichen uns, Ihren Rechner mittels des angelegten Nutzungsprofils bei Ihrem nächsten Besuch auf unserer Seite wiederzuerkennen (dauerhafte Cookies).",
      pgdataprivpara12sec8:
        "Cookies werden auf unserer Seite ausschließlich von uns selbst und nicht von Dritten verwendet, mit Ausnahme der Drittanbieter-Cookies, die in dieser Datenschutzerklärung ausdrücklich genannt werden.",
      pgdataprivpara12sec9:
        "Sie können Ihre Einwilligung dadurch erklären, dass Sie beim Aufruf unserer Webseite unseren Cookie-Banner bestätigen. Ihre einmal erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.",
      pgdataprivpara12sec10: "Wir verwenden folgende Cookies:",
      pgdataprivpara12tablehd1: "            Cookie ",
      pgdataprivpara12tablehd2: "            Zweck ",
      pgdataprivpara12tablehd3: "            Speicherdauer ",
      pgdataprivpara12tabletd1: "            Remember login",
      pgdataprivhd1313: "Keine Verwendung von Social Plugins",
      pgdataprivpara13sec1:
        "Wir setzen auf unserer Webseite keine Social Plugins ein.",
      pgdataprivhd1414: "Google Maps",
      pgdataprivpara14sec1:
        "Wir setzen auf unserer Webseite ein Plugin des Internetdienstes Google Maps ein. Betreiber von Google Maps ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (“Google”).",
      pgdataprivpara14sec2:
        "Stimmen Sie der Verarbeitung Ihrer Daten durch das Plugin „Google Maps“ durch Anklicken der Schaltfläche „Karte laden“ zu, willigen Sie in die Verarbeitung Ihrer personenbezogenen Daten ein gemäß Art. 6 Abs. 1 S. 1 lit. a) DSGVO. Es werden Informationen über die Nutzung dieser Webseite und Ihre IP-Adresse an einen Google-Server in den USA übermittelt und auch auf jenem Server gespeichert. Die Datenübermittlung ist aufgrund Ihrer Einwilligung nach Art. 49 Abs. 1 S. 1 lit. a) DSGVO zulässig. Im Rahmen der Nutzung von Google Maps wurde zwischen uns und Google ein Vertrag über die gemeinsame Verantwortlichkeit i.S.d. Art. 26 DSGVO abgeschlossen (vgl.: . ",
      pgdataprivpara14sec3:
        "Wir haben keine Kenntnis über den genauen Inhalt der übermittelten Daten, noch über ihre Nutzung durch Google. Das Unternehmen verneint in diesem Kontext die Verbindung der Daten mit Informationen aus anderen Google-Diensten und die Erfassung personenbezogener Daten. Allerdings kann Google die Informationen an Dritte übermitteln. Wenn Sie JavaScript in Ihrem Browser deaktivieren, verhindern Sie die Ausführung von Google Maps. Sie können dann aber auch keine Kartenanzeige auf unserer Webseite nutzen.",
      pgdataprivpara14sec4:
        "Näheres zu den Datenschutzbestimmungen und Nutzungsbedingungen für Google Maps erfahren Sie hier: ",
      pgdataprivpara14sec7:
        "Für die Darstellung externer Schriften verwenden wir Google Fonts im sog. „Online“-Modus. Dieser Dienst wird von der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland angeboten. In diesem Zusammenhang erfolgt ein Serveraufruf, bei dem Daten (unter anderem Ihre IP-Adresse) sowie die Seite, von der aus der Aufruf erfolgt, an einen Server von Google in den USA übertragen wird. Einzelheiten der Verarbeitung durch Google sind uns nicht bekannt.",

      pgdataprivpara14sec8:
        "Die Datenübermittlung in die USA ist aufgrund Ihrer Einwilligung nach Art. 49 Abs. 1 S. 1 lit. a) DSGVO zulässig. Die Verarbeitung ist für eine ordnungsgemäße Darstellung unserer Internetpräsenz notwendig und liegt insofern sowohl in unserem wie auch Ihrem Interesse. Rechtsgrundlage der Verarbeitung stellt somit Art. 6 Abs. 1 S. 1 lit. f) DSGVO dar, nämlich ein berechtigtes Interesse, den Außenauftritt des Unternehmens durch eine funktionsfähige Website darstellen zu können.",
      pgdataprivpara14sec9:
        "Nähere Informationen finden Sie auf den Webseiten von Google unter den folgenden Links:",
      pgdataprivhd1515: "Zahlungsdienstleister ",
      pgdataprivpara15sec1:
        "Zur Zahlungsabwicklung übergeben wir Ihre Zahlungsdaten an die nachfolgenden Zahlungsdienstleister weiter.",
      pgdataprivpara15sec2:
        "Der Einsatz der Zahlungsdienstleister erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b) DSGVO (Vertragsabwicklung) sowie im Interesse eines möglichst reibungslosen, komfortablen und sicheren Zahlungsvorgangs (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Soweit für bestimmte Handlungen Ihre Einwilligung abgefragt wird, ist Art. 6 Abs. 1 S. 1 lit. a) DSGVO Rechtsgrundlage der Datenverarbeitung; Einwilligungen sind jederzeit mit Wirkung für die Zukunft widerrufbar.",
      pgdataprivpara15sec3:
        "Die Datenweitergabe erfolgt stets auf Grundlage einer gesetzlichen Norm bzw. eines geeigneten Vertrags nach Art. 26 oder 28 DSGVO, der die Beachtung sämtlicher datenschutzrechtlicher Anforderungen sicherstellt.",
      pgdataprivhd1616:
        "PayPal: Als Zahlungsmittel können Sie PayPal, PayPal Europe S.à.r.l. & Cie. S.C.A., 22-24 Boulevard Royal, 2449 Luxembourg, wählen. Ihre Daten werden dadurch direkt an PayPal zum Zwecke der Zahlungsabwicklung übermittelt. Zahlungen werden hierbei über virtuelle Konten, bzw. über eine virtuelle Kreditkarte, abgewickelt. Übermittelt werden diejenigen Daten, die zur ordnungsgemäßen Zahlungs- und Vertragsabwicklung erforderlich sind.",
      pgdataprivpara16sec1:
        "Die Verarbeitung Ihrer Daten durch PayPal erfolgt nach Art. 6 Abs. 1 S. 1 lit. b) DSGVO, soweit dies zur Durchführung des Vertrags erforderlich ist.",
      pgdataprivpara16sec2:
        "Es ist nicht ausgeschlossen, dass PayPal Ihre Daten zur Bonitäts- und Identitätsprüfung an Dritte weiterleitet – soweit dies zur Erfüllung der vertraglichen Verpflichtungen erforderlich wird. Weitere Informationen zum Thema Datenschutz bei PayPal finden Sie unter diesem Link:  ",
      pgdataprivpara16sec3:
        "PayPal gibt personenbezogene Daten gegebenenfalls an verbundene Unternehmen und sonstige Leistungserbringer weiter, soweit dies zur Vertragserfüllung erforderlich ist. Soweit Daten in die USA übermittelt werden erfolgt dies auf Grundlage Ihrer Einwilligung nach Art. 49 Abs. 1 S. 1 lit. a) DSGVO.",
      pgdataprivhd1717:
        "Sofortüberweisung:Als Zahlungsmittel können Sie Sofortüberweisung, einen Zahlungsdienst der SOFORT GmbH, Fußbergstraße 1, 82131 Gauting, Deutschland (im Folgenden: SOFORT) wählen. Ihre personenbezogenen Daten werden dadurch direkt an SOFORT zum Zwecke der Zahlungsabwicklung übermittelt.",
      pgdataprivpara17sec1:
        "Nähere Informationen zu Nutzungsbedingungen und Datenschutz von Sofortüberweisung finden Sie unter ",
      pgdataprivhd1818: "Datenweitergabe",
      pgdataprivpara18sec1:
        "Daten geben wir an sonstige Dritte weiter, wenn und soweit wir an diese die Erfüllung von Aufgaben übertragen haben. Die Datenweitergabe erfolgt nur, soweit dies zur Erfüllung der übertragenen Aufgaben erforderlich ist.",
      pgdataprivpara18sec2: "Wir arbeiten mit folgenden Unternehmen zusammen:",
      "pgdataprivpara18secli1-1":
        "SOFORT GmbH, Fußbergstraße 1, 82131 Gauting, Deutschland",
      pgdataprivpara18sec3:
        "Weiterhin können beispielsweise in den folgenden Bereichen Dienstleister mit Aufgaben betraut werden:",
      pgdataprivpara18secli1: "IT-Instandhaltung",
      pgdataprivpara18secli2: "IT-Entwicklung",
      pgdataprivpara18secli3: "IT-Bereitstellung",
      pgdataprivpara18secli4: "Rechtsberatung",
      pgdataprivpara18sec4:
        "Soweit erforderlich geben wir zur Zahlungsabwicklung Ihre personengezogenen Zahlungsdaten an ein mit der Zahlungsabwicklung (SEPA-Lastschrift oder Empfang) beauftragtes Kreditinstitut weiter.",
      pgdataprivpara18sec5:
        "Die Datenweitergabe erfolgt stets auf Grundlage einer gesetzlichen Norm bzw. eines geeigneten Vertrags nach Art. 26 oder 28 DSGVO, der die Beachtung sämtlicher datenschutzrechtlicher Anforderungen sicherstellt.",
      pgdataprivpara18sec6:
        "Im Übrigen erfolgt eine Datenweitergabe ausschließlich im Rahmen der gesetzlich vorgesehenen Fälle, zum Beispiel bei gesetzlicher Auskunftspflicht gegenüber Strafverfolgungsbehörden. Die Datenweitergabe ist in diesen Fällen nach Art. 6 Abs. 1 S. 1 lit. c) DSGVO legitimiert.",
      pgdataprivhd1919: "Datenweitergabe in ein Drittland",
      pgdataprivpara19sec1:
        "Es ist eine Datenweitergabe in ein Drittland beabsichtigt. Diese Weitergabe erfolgt auf der Grundlage der von Ihnen erteilten Einwilligung. Empfänger der von Ihnen bereitgestellten Daten sind folgende Unternehmen: ",
      pgdataprivpara19secli1:
        "    2 PayPal Holdings, Inc., 211 North First Street, San Jose, California 95131, USA",
      pgdataprivpara19secli2:
        "    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Mutterkonzern in den USA)",
      pgdataprivpara19sec2:
        "Sofern Daten auf Grundlage einer Einwilligung in ein Drittland übermittelt werden, ohne dass zugleich ein Angemessenheitsbeschluss bzw. sonstige geeignete Garantien vorliegen, muss auf Grundlage des Art. 49 Abs. 1 S. 1 lit. a) DSGVO auf das damit einhergehende erhöhte Risiko der Datenverarbeitung im Rahmen der Übertragung hingewiesen werden. Wir möchten Ihnen jedoch versichern, dass dank sorgfältiger Auswahl und stetiger Überprüfung der Standards unserer Vertragspartner potentielle Risiken erfolgreich minimiert werden.",
      pgdataprivhd2020: "Dauer der Datenspeicherung",
      pgdataprivpara20sec1:
        "Ihre personenbezogenen Daten werden von uns unverzüglich gelöscht, sobald die Daten für die Erfüllung der vertraglichen und gesetzlichen Pflichten oder zur Wahrnehmung unserer berechtigten Interessen nicht mehr benötigt werden.",
      pgdataprivpara20sec2:
        "Personenbezogene Daten werden bei einem Vertragsverhältnis zumindest so lange gespeichert, wie dies zur Erfüllung vertraglicher Pflichten und zur Wahrnehmung vertraglicher Rechte erforderlich ist. Dieser Zeitraum kann über den eigentlichen Vertragszeitraum hinausgehen, da die Daten im Rahmen der Verjährungsfristen auch nach Vertragsende noch relevant sein können. Zudem kann eine Löschung erst erfolgen, wenn etwaige steuer- und handelsrechtliche Aufbewahrungsfristen abgelaufen sind.",
      pgdataprivpara20sec3:
        "Die Kriterien zur Dauer der Speicherung von Cookies können Sie dem entsprechenden Abschnitt entnehmen.",
      pgdataprivhd2121: "Betroffenenrechte",
      pgdataprivpara21sec1:
        "Als von der Verarbeitung personenbezogener Daten betroffene Person haben Sie folgende Rechte:",
      pgdataprivpara21sec2:
        "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob personenbezogene Daten verarbeitet werden. Ist dies der Fall, haben Sie ein Recht auf Auskunft über die personenbezogenen Daten und auf die in Art. 15 DSGVO im Einzelnen aufgeführten Informationen.",
      pgdataprivpara21sec3:
        "Sie haben das Recht, von dem Verantwortlichen unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten und ggf. die Vervollständigung unvollständiger personenbezogener Daten zu verlangen (Art. 16 DSGVO).",
      pgdataprivpara21sec4:
        "Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der in Abs. 17 DSGVO im Einzelnen aufgeführten Gründe zutrifft, z.B. wenn die Daten für die verfolgten Zwecke nicht mehr benötigt werden (Recht auf Löschung).",
      pgdataprivpara21sec5:
        "Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 18 DSGVO aufgeführten Voraussetzungen gegeben ist, z. B. wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben, für die Dauer der Prüfung durch den Verantwortlichen.",
      pgdataprivpara21sec6:
        "Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, welche Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln, sofern die Verarbeitung dieser Daten auf Ihrer Einwilligung oder auf einem Vertrag beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt (Art. 20 DSGVO). Bei der Ausübung des Rechts auf Datenübertragbarkeit haben Sie das Recht, zu erwirken, dass die personenbezogenen Daten direkt von uns an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist (Recht auf Datenübertragbarkeit).",
      pgdataprivpara21sec7:
        "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund unseres berechtigten Interesses erfolgt, Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Art. 21 DSGVO).",
      pgdataprivpara21sec8:
        "Hinsichtlich der Wahrnehmung Ihrer Rechte können Sie uns jederzeit über die auf unserer Webseite angebotenen Kontaktmöglichkeiten kontaktieren.",
      pgdataprivhd2222: "Widerspruchsrecht bei Direktwerbung",
      pgdataprivpara22sec1:
        "In einzelnen Fällen verarbeiten wir personenbezogene Daten, um Direktwerbung zu betreiben. In diesem Fall haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen (Art. 21 DSGVO).",
      pgdataprivpara22sec2:
        "Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.",
      pgdataprivpara22sec3:
        "Der Widerspruch kann jederzeit formfrei über eine der in dieser Datenschutzerklärung oder in unserem Impressum angegebenen Kontaktmöglichkeiten erfolgen.",
      pgdataprivhd2323: "Beschwerderecht",
      pgdataprivpara23sec1:
        "Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Sie können dieses Recht bei einer Aufsichtsbehörde in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend machen. In",
      pgdataprivpara23sec2:
        "Selbstverständlich können Sie sich jedoch auch direkt an uns wenden, wenn Sie unzufrieden sind oder Fragen zum Datenschutz haben. Am schnellsten erreichen Sie unseren internen Ansprechpartner zum Thema Datenschutz unter den oben aufgeführten Kontaktdaten.",
      pgdataprivhd2424: "Pflicht zur Bereitstellung von Daten",
      pgdataprivpara24sec1:
        "Eine Pflicht zur Bereitstellung von Daten besteht grundsätzlich nicht. Die Bereitstellung von Daten kann jedoch zur Nutzung bestimmter Funktionen oder zum Abschluss eines Vertrags erforderlich sein. Werden die erforderlichen Daten von Ihnen nicht zur Verfügung gestellt, können Sie bestimmte Funktionen oder Dienstleistungen nicht nutzen bzw. kann ein Vertrag nicht abgeschlossen werden.",
      pgdataprivhd2525: "Aktualität und Änderung dieser Datenschutzinformation",
      pgdataprivpara26sec26:
        "Diese Datenschutzinformation ist auf dem Stand Januar 2023.",
      pgdataprivpara27sec27:
        "Wir behalten uns vor, diese Datenschutzinformation bei Bedarf zur Anpassung an gesetzliche und technische Entwicklungen oder im Zusammenhang mit dem Angebot neuer Dienstleistungen oder Produkte zu aktualisieren. Sollten wir unsere Datenschutzpolitik ändern, werden wir diese direkt in diese Erklärung auf unserer Homepage einstellen.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: "de",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
