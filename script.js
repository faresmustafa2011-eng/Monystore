/* ===== MOCK DATA ===== */
const products = [
  {
    id: 1,
    title: "تيشريت قطن ريب مشجر",
    title_ar: " تيشريت قطن ريب مشجر",
    category: "women",
    price: 270,
    image: "images/تيشيرت مشجر1.jpeg",
    images: ["images/WhatsApp Image 2026-05-01 at 2.33.03 AM.jpeg"],

    sizes: ["to 70kg"],
    colors: ["offwhite", "black", "brown"],
    description: "بيتلبس بكذا طريقه وكذا استايلينج😍😍😍😍تلبيس فرى ل70ك",
  },
  {
    id: 2,
    title: " شيميز كسر",
    title_ar: " شيميز كسر",
    category: "women",
    price: 650,
    image: "images/WhatsApp Image 2026-04-30 at 7.51.22 PM.jpeg",
    images: ["images/WhatsApp Image 2026-04-30 at 7.51.22 PM.jpeg"],
    sizes: ["58cm", "63cm", "68cm"],
    colors: ["offwhite", "black", "brown"],
    description: "الخامه كتان جلاكسى",
  },
  {
    id: 3,
    title: "شنطه مستورده",
    category: "women",
    price: 350,
    image: "images/bag1.jpeg",
    images: ["images/bage2.jpeg", "images/bag3.jpeg", "images/bag1.jpeg"],
    sizes: ["one size"],
    colors: ["black", "gray", "purple", "blue"],
    description:
      "شنطه مستورده ووتربروف بالوان تريندي  مستورده ووتربروف بالوان تريندي ♥️",
  },
  {
    id: 4,
    title: "طقم وسط ولادي و طقم وسط بناتي",
    category: "kids",
    price: 540,
    image: "images/boy1.jpeg",
    images: ["images/boy2.jpeg", "images/boy3.jpeg", "images/boy1.jpeg"],
    sizes: ["6", "8", "10", "12"],
    colors: ["orange", "black", "beige", "darkred"],
    description:
      " طقم وسط ولادي و طقم وسط بناتي 💥 🏖️ للعيد و المصايف 🏝️🌟 الخامه 🌟 👌 التيشيرت قطن سنجل  ليكرا👌 👌 الشورت سمر ميلتون قطن 100 % 👌🔥طباعة جيليتر 🔥اعلي خامه و افضل طباعه من مصنع united الغنية عن التعريف",
  },
  {
    id: 5,
    title: "سوت بناتي  صيفي جديد خفيف وظريف",
    category: "kids",
    price: 560,
    image: "images/سوت بناتي  صيفي جديد خفيف وظريف1.jpeg",
    images: [
      "images/سوت بناتي  صيفي جديد خفيف وظريف1.jpeg",
      "images/سوت بناتي  صيفي جديد خفيف وظريف2.jpeg",
      "images/سوت بناتي  صيفي جديد خفيف وظريف3.jpeg",
      "images/سوت بناتي  صيفي جديد خفيف وظريف4.jpeg",
      "images/سوت بناتي  صيفي جديد خفيف وظريف5.jpeg",
    ],
    sizes: ["6", "8", "10", "12", "14"],
    colors: ["purple", "pink", "pink and black", "white "],
    description:
      "سوت بناتي  صيفي جديد خفيف وظريف\n\n🧶 الخامه \n\n التيشرت قطن full  licra 💯💯\nالبنطلون وايت ليج سمر ميلتون قطن💯💯\n\n🎨🎨طباعات واللوانات متميزه\n",
  },
  {
    id: 6,
    title: " سوت بناتي  صيفي جديد خفيف وظريف",
    category: "women",
    price: 600,
    image: "images/تيشيرت اوفر سايز تلبيس 1.jpeg",
    images: [
      "images/تيشيرت اوفر سايز تلبيس 1.jpeg",
      "images/تيشيرت اوفر سايز تلبيس 2.jpeg",
    ],
    sizes: ["to 90kg"],
    colors: ["darkred", "green", "dirty", "pink"],
    description: "خامه قطن بيور مستورده ممتااازه جدا جدا اوفر سايز",
  },
  {
    id: 7,
    title: "طقم خروج صيفى  ",
    category: "men",
    price: 700,
    image: "images/t-shirt3.jpeg",
    images: [
      "images/t-shirt1.jpeg",
      "images/t-shirt2.jpeg",
      "images/t-shirt3.jpeg",
    ],
    sizes: ["m", "l", "xl", "xxl"],
    colors: ["green", "skyblue", "darkblue"],
    description:
      " طقم خروج صيفى  ينفع لجميع الاغراض شورت سمر ميلتون قطن   يعنى تقيل و فخامة فى اللبس و كمان مطبوع  شيرت قطن ١٠٠٪ مطبوع طباعة قطع و طباعة نسيج يعنى هينفع  مع بعضه و ينفع تستخدم كل قطعة لوحدها ينفع خروج و نوادى و مصيف لبيس كبير مش بس مرتاح مش هتلاقى جودة تصميم و  خامات و طباعة و تقفيل غير عندنا بس بفضل الله",
  },
  {
    id: 8,
    title: " POLO شورت ماركة ",
    category: "men",
    price: 500,
    image: "images/شورت1.jpeg",
    images: [
      "images/شورت1.jpeg",
      "images/شورت2.jpeg",
      "images/شورت3.jpeg",
      "images/شورت4.jpeg",
    ],
    sizes: ["m", "l", "2xl", "3xl", "4xl"],
    colors: ["grey", "white", "black", "darkblue"],
    description:
      " شورت ماركة POLO خامه ميلتون صيفى و مستورده عاليه الجوده قطن / 100x100",
  },

  {
    id: 9,
    title: " انسيال جولد",
    category: "women",
    price: 305,
    image: " images/انسيال1.jpeg",
    images: [
      "images/انسيال1.jpeg",
      "images/انسيال2.jpeg",
      "images/انسيال3.jpeg",
      "images/انسيال4.jpeg",
    ],
    colors: ["gold"],
    sizes: ["shape1", "shape2", "shape3", "shape4"],
    description: "انسيال جولد بلاتد فصوص ميكرو هاي كوالتي",
  },
];

/* ===== SHOPPING CART & WISHLIST ===== */
class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("monyCart") || "[]");
  }

  addItem(product, size, color, quantity = 1) {
    const existingItem = this.items.find(
      (item) =>
        item.id === product.id && item.size === size && item.color === color,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        title_ar: product.title_ar,
        price: product.price,
        image: product.image,
        size,
        color,
        quantity,
      });
    }

    this.save();
    return this.items.length;
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.save();
  }

  updateQuantity(index, quantity) {
    if (quantity <= 0) {
      this.removeItem(index);
    } else {
      this.items[index].quantity = quantity;
      this.save();
    }
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotalPrice() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  save() {
    localStorage.setItem("monyCart", JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}

class Wishlist {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("monyWishlist") || "[]");
  }

  addItem(product) {
    if (!this.items.find((item) => item.id === product.id)) {
      this.items.push({
        id: product.id,
        title: product.title,
        title_ar: product.title_ar,
        price: product.price,
        image: product.image,
        category: product.category,
      });
      this.save();
      return true;
    }
    return false;
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.save();
  }

  isFavorite(productId) {
    return this.items.some((item) => item.id === productId);
  }

  clear() {
    this.items = [];
    this.save();
  }

  save() {
    localStorage.setItem("monyWishlist", JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}

class RecentlyViewed {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("monyRecentlyViewed") || "[]");
  }

  addProduct(product) {
    this.items = this.items.filter((item) => item.id !== product.id);
    this.items.unshift({
      id: product.id,
      title: product.title,
      title_ar: product.title_ar,
      price: product.price,
      image: product.image,
      category: product.category,
      viewedAt: new Date().toISOString(),
    });

    if (this.items.length > 10) {
      this.items.pop();
    }

    this.save();
  }

  getItems() {
    return this.items.slice(0, 6);
  }

  save() {
    localStorage.setItem("monyRecentlyViewed", JSON.stringify(this.items));
  }
}

// Initialize instances
const cart = new ShoppingCart();
const wishlist = new Wishlist();
const recentlyViewed = new RecentlyViewed();

const translations = {
  en: {
    nav_home: "Home",
    nav_categories: "Categories",
    nav_products: "Products",
    nav_about: "About",
    nav_contact: "Contact",
    search_placeholder: "Search products...",
    hero_subtitle: "New Collection 2026",
    hero_desc:
      "Premium fashion for Men, Women & Kids — Order instantly via WhatsApp",
    shop_now_wa: '<i class="fab fa-whatsapp"></i> Shop Now on WhatsApp',
    explore_collections: "Explore Collections",
    scroll: "Scroll",
    happy_customers: "Happy Customers",
    products_count: "Products",
    collections_count: "Collections",
    wa_support: "WhatsApp Support",
    collections_tag: "Collections",
    shop_by_category: "Shop By Category",
    shop_by_category_sub:
      "Discover premium styles for every member of your family",
    men: "Men",
    women: "Women",
    kids: "Kids",
    other: "Other Things",
    all: "All",
    products_120: "120+ Products",
    products_200: "200+ Products",
    products_80: "80+ Products",
    inspiration_tag: "Inspiration",
    lookbook_title: "Trending Lookbook",
    lookbook_sub: "Discover the latest styling trends tailored for you",
    newsletter_title: "Stay in the Loop",
    newsletter_sub: "Subscribe for exclusive deals and new arrivals",
    email_placeholder: "Enter your email...",
    subscribe: "Subscribe",
    view_subscribers: "View Subscribers",
    quick_links: "Quick Links",
    collections: "Collections",
    contact_us: "Contact Us",
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    instagram: "Instagram",
    chat_wa_now: '<i class="fab fa-whatsapp"></i> Chat on WhatsApp Now',
    rights_reserved: "All Rights Reserved.",
    designed_with: "Designed with",
    our_collections: "Our Collections",
    choose_style: "Choose your style",
    mens_collection: "Men's Collection",
    mens_collection_desc:
      "Casual, formal & sportswear for the modern man. From shirts to suits, we have it all.",
    browse_men: "Browse Men",
    womens_collection: "Women's Collection",
    womens_collection_desc:
      "Elegant dresses, stylish tops, and everything in between for the modern woman.",
    browse_women: "Browse Women",
    kids_collection: "Kids' Collection",
    kids_collection_desc:
      "Comfortable, playful and durable clothing for your little ones aged 2–14.",
    browse_kids: "Browse Kids",
    other_collection: "Home Accessories",
    other_collection_desc:
      "Beautiful bedding and home essentials to elevate your living space.",
    browse_other: "Browse Other Things",
    all_products: "All Products",
    find_style: "Find your perfect style",
    sort_by: "Sort By",
    price_asc: "Price: Low to High",
    price_desc: "Price: High to Low",
    name_az: "Name A–Z",
    back: "Back",
    mens_fashion: "Men's Fashion",
    womens_fashion: "Women's Fashion",
    kids_fashion: "Kids' Fashion",
    best_sellers: "Best Sellers",
    new_arrivals: "New Arrivals",
    about_us: "About Us",
    about_sub: "Our story, vision & values",
    our_story_tag: "Our Story",
    born_passion: "Born from Passion for Fashion",
    about_p1:
      "Mony Store was founded with a simple yet powerful mission: to make premium fashion accessible to everyone in Egypt and beyond. We believe that style shouldn't compromise quality, and quality shouldn't break the bank.",
    about_p2:
      "Starting as a small local boutique, we've grown into a trusted online fashion destination — serving thousands of happy customers across Egypt through the convenience of WhatsApp ordering.",
    our_vision: "Our Vision",
    vision_desc:
      "To become Egypt's most loved fashion brand — one where every customer feels seen, styled, and confident.",
    our_mission: "Our Mission",
    mission_desc:
      "Delivering premium quality clothing with exceptional service, making fashion simple and accessible through WhatsApp.",
    our_values: "Our Values",
    values_desc:
      "Quality, integrity, style and customer satisfaction. We stand behind every product we sell.",
    premium_quality: "Premium Quality",
    premium_quality_desc:
      "Every item is carefully selected for quality and style",
    easy_wa_orders: "Easy WhatsApp Orders",
    easy_wa_orders_desc: "Order in seconds — no complicated checkout process",
    fast_delivery: "Fast Delivery",
    fast_delivery_desc: "Quick and reliable delivery across Egypt",
    exclusive_collections: "Exclusive Collections",
    exclusive_collections_desc:
      "Curated styles and unique pieces you won't find anywhere else",
    best_prices: "Best Prices",
    best_prices_desc: "Premium fashion at prices that won't break the bank",
    wa_support_247: "24/7 Support",
    wa_support_247_desc: "We're always here to help via WhatsApp",
    get_in_touch: "Get In Touch",
    contact_desc:
      "Have questions? We're just a WhatsApp message away. Reach out and we'll get back to you instantly.",
    footer_desc:
      "Premium fashion for Men, Women & Kids. Order via WhatsApp for the best experience.",
    size: "Size",
    related_products: "Related Products",
    toast_subscribed:
      "Welcome to the inner circle! You've successfully subscribed.",
    toast_already_subscribed: "This email is already part of our community.",
    toast_message_sent: "Message received. Our team will contact you shortly.",
    newsletter_verifying: "Authenticating email address...",
    newsletter_error:
      "This email address could not be verified. Please ensure it's correct and try again.",
    newsletter_success: "Identity verified. Subscription confirmed.",
    egp: "EGP",
    subscribers_title: "Our Subscribers",
    no_subscribers: "No subscribers yet.",
    total: "Total",
    clear_all: "Delete All",
    delete: "Delete",
    quick_view: "Quick View",
    best_seller: "Best Seller",
    search_title: 'Search Results for "{query}"',
    select_size: "Select Size",
    select_color: "Select Color",
    order_wa: '<i class="fab fa-whatsapp"></i> Order on WhatsApp',
    wa_message_template:
      "Hello Mony Store! 👋\n\nI want to order:\n🛍️ *Product:* {product}\n📏 *Size:* {size}\n🎨 *Color:* {color}\n\nIs it available?",
    womens_elegance: "Women's Elegance",
    urban_men: "Urban Men",
    kids_playful: "Kids Playful",
    shop_look: "Shop Look",
    reviews_tag: "Reviews",
    testimonials_title: "What Our Customers Say",
    testi_1_text:
      "Absolutely love the quality! Ordered via WhatsApp and received my items in 2 days. Will definitely order again!",
    testi_1_name: "Sara M.",
    testi_1_loc: "Cairo, Egypt",
    testi_2_text:
      "Best fashion store I've found online. The kids section is amazing — my children love everything I got them!",
    testi_2_name: "Ahmed K.",
    testi_2_loc: "Alexandria, Egypt",
    testi_3_text:
      "Incredible prices for premium quality. The WhatsApp ordering is so convenient. Highly recommend Mony Store!",
    testi_3_name: "Nour H.",
    testi_3_loc: "Giza, Egypt",
    admin_login_title: "Admin Login",
    admin_password_placeholder: "Enter Password",
    admin_login_btn: "Login",
    admin_access_granted: "Admin access granted.",
    admin_access_denied: "You are not the admin!",
    admin_incorrect_pass: "Incorrect password. {attempts} attempts left.",
    subscriber_deleted: "Subscriber deleted.",
    all_subscribers_deleted: "All subscribers have been deleted.",
    confirm_delete_all: "Are you sure you want to delete all subscribers?",
    cart_title: "Shopping Cart",
    empty_cart: "Your cart is empty.",
    add_to_cart: "Add to Cart",
    checkout: "Checkout on WhatsApp",
    quantity: "Qty",
    added_to_cart: "Added to cart successfully!",
    cart_checkout_msg: "Hello Mony Store! 👋\n\nI want to order the following items from my cart:\n",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_categories: "الأقسام",
    nav_products: "المنتجات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    search_placeholder: "ابحث عن منتجات...",
    hero_subtitle: "مجموعة جديدة 2026",
    hero_desc: "أزياء فاخرة للرجال والنساء والأطفال — اطلب فوراً عبر واتساب",
    shop_now_wa: '<i class="fab fa-whatsapp"></i> تسوق الآن عبر واتساب',
    explore_collections: "استكشف المجموعات",
    scroll: "مرر للأسفل",
    happy_customers: "عميل سعيد",
    products_count: "منتج",
    collections_count: "مجموعات",
    wa_support: "دعم واتساب",
    collections_tag: "المجموعات",
    shop_by_category: "تسوق حسب القسم",
    shop_by_category_sub: "اكتشف أنماطاً فاخرة لكل فرد في عائلتك",
    men: "رجال",
    women: "نساء",
    kids: "أطفال",
    other: "أشياء أخرى",
    all: "الكل",
    products_120: "+120 منتج",
    products_200: "+200 منتج",
    products_80: "+80 منتج",
    inspiration_tag: "إلهام",
    lookbook_title: "كتالوج الصيحات",
    lookbook_sub: "اكتشف أحدث صيحات الموضة المصممة لك",
    newsletter_title: "ابقَ على اطلاع",
    newsletter_sub: "اشترك للحصول على عروض حصرية ووصل حديثاً",
    email_placeholder: "أدخل بريدك الإلكتروني...",
    subscribe: "اشتراك",
    view_subscribers: "عرض المشتركين",
    quick_links: "روابط سريعة",
    collections: "المجموعات",
    contact_us: "اتصل بنا",
    whatsapp: "واتساب",
    facebook: "فيسبوك",
    instagram: "إنستغرام",
    chat_wa_now: '<i class="fab fa-whatsapp"></i> دردش عبر واتساب الآن',
    rights_reserved: "جميع الحقوق محفوظة.",
    designed_with: "صمم بـ",
    our_collections: "مجموعاتنا",
    choose_style: "اختر أسلوبك",
    mens_collection: "مجموعة الرجال",
    mens_collection_desc:
      "ملابس كاجوال، رسمية ورياضية للرجل العصري. من القمصان إلى البدلات، لدينا كل شيء.",
    browse_men: "تصفح الرجال",
    womens_collection: "مجموعة النساء",
    womens_collection_desc:
      "فساتين أنيقة، بلايز عصرية، وكل شيء بينهما للمرأة العصرية.",
    browse_women: "تصفح النساء",
    kids_collection: "مجموعة الأطفال",
    kids_collection_desc:
      "ملابس مريحة، مرحة ومتينة لأطفالك من سن 2 إلى 14 سنة.",
    browse_kids: "تصفح الأطفال",
    other_collection: "إكسسوارات المنزل",
    other_collection_desc:
      "مفروشات ومستلزمات منزلية أنيقة لتجميل مساحة معيشتك.",
    browse_other: "تصفح أشياء أخرى",
    all_products: "جميع المنتجات",
    find_style: "جد أسلوبك المثالي",
    sort_by: "ترتيب حسب",
    price_asc: "السعر: من الأقل للأعلى",
    price_desc: "السعر: من الأعلى للأقل",
    name_az: "الاسم: أ-ي",
    back: "رجوع",
    mens_fashion: "أزياء رجالية",
    womens_fashion: "أزياء نسائية",
    kids_fashion: "أزياء أطفال",
    best_sellers: "الأكثر مبيعاً",
    new_arrivals: "وصل حديثاً",
    about_us: "من نحن",
    about_sub: "قصتنا، رؤيتنا وقيمنا",
    our_story_tag: "قصتنا",
    born_passion: "ولدت من شغف الموضة",
    about_p1:
      "تأسست موني ستور بمهمة بسيطة ولكن قوية: جعل الأزياء الفاخرة في متناول الجميع في مصر وخارجها. نحن نؤمن بأن الأناقة لا ينبغي أن تساوم على الجودة، والجودة لا ينبغي أن تكلف ثروة.",
    about_p2:
      "بدأنا كبوتيك محلي صغير، وكبرنا لنصبح وجهة أزياء موثوقة عبر الإنترنت — نخدم آلاف العملاء السعداء في جميع أنحاء مصر من خلال سهولة الطلب عبر واتساب.",
    our_vision: "رؤيتنا",
    vision_desc:
      "أن نصبح العلامة التجارية الأكثر حبًا في مصر — حيث يشعر كل عميل بأنه مرئي، أنيق، وواثق.",
    our_mission: "مهمتنا",
    mission_desc:
      "تقديم ملابس ذات جودة فاخرة مع خدمة استثنائية، مما يجعل الموضة بسيطة وسهلة الوصول عبر واتساب.",
    our_values: "قيمنا",
    values_desc:
      "الجودة، النزاهة، الأناقة ورضا العملاء. نحن نقف وراء كل منتج نبيعه.",
    premium_quality: "جودة فاخرة",
    premium_quality_desc: "يتم اختيار كل قطعة بعناية لضمان الجودة والأناقة",
    easy_wa_orders: "طلبات واتساب سهلة",
    easy_wa_orders_desc: "اطلب في ثوانٍ — لا توجد عملية دفع معقدة",
    fast_delivery: "شحن سريع",
    fast_delivery_desc: "توصيل سريع وموثوق في جميع أنحاء مصر",
    exclusive_collections: "مجموعات حصرية",
    exclusive_collections_desc:
      "أنماط منسقة وقطع فريدة لن تجدها في أي مكان آخر",
    best_prices: "أفضل الأسعار",
    best_prices_desc: "أزياء فاخرة بأسعار لا ترهق ميزانيتك",
    wa_support_247: "دعم 24/7",
    wa_support_247_desc: "نحن هنا دائماً للمساعدة عبر واتساب",
    get_in_touch: "تواصل معنا",
    contact_desc:
      "لديك أسئلة؟ نحن على بعد رسالة واتساب واحدة فقط. تواصل معنا وسنرد عليك فوراً.",
    footer_desc:
      "أزياء فاخرة للرجال والنساء والأطفال. اطلب عبر واتساب للحصول على أفضل تجربة.",
    related_products: "منتجات ذات صلة",
    toast_subscribed: "أهلاً بك في موني ستور! تم الاشتراك بنجاح.",
    toast_already_subscribed: "هذا البريد مسجل لدينا بالفعل.",
    toast_message_sent: "تم استلام رسالتك. سيتواصل فريقنا معك قريباً.",
    newsletter_verifying: "جاري التحقق من صحة البريد الإلكتروني...",
    newsletter_error:
      "تعذر التحقق من هذا البريد. يرجى التأكد من صحته والمحاولة مرة أخرى.",
    newsletter_success: "تم التحقق من الهوية. تأكيد الاشتراك بنجاح.",
    egp: "جنيه مصري",
    subscribers_title: "المشتركون لدينا",
    no_subscribers: "لا يوجد مشتركون بعد.",
    total: "الإجمالي",
    clear_all: "حذف الكل",
    delete: "حذف",
    quick_view: "عرض سريع",
    best_seller: "الأكثر مبيعاً",
    search_title: 'نتائج البحث عن "{query}"',
    select_size: "اختر المقاس",
    select_color: "اختر اللون",
    order_wa: '<i class="fab fa-whatsapp"></i> اطلب عبر واتساب',
    wa_message_template:
      "أهلاً موني ستور! 👋\n\nأريد طلب:\n🛍️ *المنتج:* {product}\n📏 *المقاس:* {size}\n🎨 *اللون:* {color}\n\nهل هو متوفر؟",
    womens_elegance: "أناقة المرأة",
    urban_men: "الرجل العصري",
    kids_playful: "مرح الأطفال",
    shop_look: "تسوق الإطلالة",
    reviews_tag: "الآراء",
    testimonials_title: "ماذا يقول عملاؤنا",
    testi_1_text:
      "أعجبتني الجودة كثيراً! طلبت عبر الواتساب واستلمت طلبي في يومين. سأطلب بالتأكيد مرة أخرى!",
    testi_1_name: "سارة م.",
    testi_1_loc: "القاهرة، مصر",
    testi_2_text:
      "أفضل متجر أزياء وجدته على الإنترنت. قسم الأطفال رائع — أطفالي أحبوا كل شيء اشتريته لهم!",
    testi_2_name: "أحمد ك.",
    testi_2_loc: "الإسكندرية، مصر",
    testi_3_text:
      "أسعار مذهلة لجودة ممتازة. الطلب عبر واتساب مريح جداً. أنصح الجميع بـ موني ستور!",
    testi_3_name: "نور هـ.",
    testi_3_loc: "الجيزة، مصر",
    admin_login_title: "دخول المسؤول",
    admin_password_placeholder: "أدخل كلمة المرور",
    admin_login_btn: "دخول",
    admin_access_granted: "تم منح صلاحية المسؤول.",
    admin_access_denied: "أنت لست المسؤول!",
    admin_incorrect_pass: "كلمة المرور غير صحيحة. تبقى {attempts} محاولات.",
    subscriber_deleted: "تم حذف المشترك.",
    all_subscribers_deleted: "تم حذف جميع المشتركين.",
    confirm_delete_all: "هل أنت متأكد من حذف جميع المشتركين؟",
    cart_title: "عربة التسوق",
    empty_cart: "عربة التسوق فارغة.",
    add_to_cart: "أضف إلى العربة",
    checkout: "إتمام الطلب عبر واتساب",
    quantity: "الكمية",
    added_to_cart: "تمت الإضافة إلى العربة بنجاح!",
    cart_checkout_msg: "أهلاً موني ستور! 👋\n\nأريد طلب العناصر التالية من عربة التسوق:\n",
  },
};

const WA_NUMBER = "201065291552";
let currentProducts = [...products];
let historyStack = ["home"];
let currentProduct = null;

/* ===== DOM ELEMENTS ===== */
const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

/* ===== INIT & EVENT LISTENERS ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader smoothly
  setTimeout(() => {
    loader.classList.add("hidden");
    initScrollAnimations();
  }, 1200);

  // Render initial products
  renderProductsGrid(products, "productsGrid");

  // Theme Init
  const savedTheme = localStorage.getItem("monyTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Language Init
  const savedLang = localStorage.getItem("monyLang") || "en";
  setLanguage(savedLang);

  // Admin Secret Check
  if (sessionStorage.getItem("monyAdmin") === "true") {
    document.querySelector(".newsletter-admin").style.display = "flex";
  }

  // Initialize Cart Badge
  updateCartBadge();
});

/* ===== ADMIN SECRET LOGIC ===== */
let logoClicks = 0;
document.querySelector(".logo").addEventListener("click", (e) => {
  logoClicks++;
  if (logoClicks === 3) {
    toggleAdminModal(true);
    logoClicks = 0;
  }

  setTimeout(() => {
    logoClicks = 0;
  }, 2000);
});

function toggleAdminModal(show) {
  const modal = document.getElementById("adminModal");
  if (show) {
    modal.classList.add("active");
    document.getElementById("adminPass").value = "";
    document.getElementById("adminPass").focus();
  } else {
    modal.classList.remove("active");
  }
}

let adminAttempts = 0;

function checkAdminPass() {
  const lang = document.documentElement.lang || "en";
  const passInput = document.getElementById("adminPass");
  if (passInput.value === "mony123") {
    sessionStorage.setItem("monyAdmin", "true");
    document.querySelector(".newsletter-admin").style.display = "flex";
    showToast(translations[lang].admin_access_granted);
    toggleAdminModal(false);
    adminAttempts = 0;
  } else {
    adminAttempts++;
    if (adminAttempts >= 3) {
      showToast(translations[lang].admin_access_denied);
      toggleAdminModal(false);
      adminAttempts = 0; // Reset for next time they try to open it
    } else {
      showToast(
        translations[lang].admin_incorrect_pass.replace(
          "{attempts}",
          3 - adminAttempts,
        ),
      );
      passInput.value = "";
      passInput.focus();
    }
  }
}

document.getElementById("togglePass").addEventListener("click", function () {
  const passInput = document.getElementById("adminPass");
  const icon = this.querySelector("i");
  if (passInput.type === "password") {
    passInput.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passInput.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.replace("dark-mode", "light-mode");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("monyTheme", "light");
  } else {
    document.body.classList.replace("light-mode", "dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("monyTheme", "dark");
  }
});

// Language Toggle
langToggle.addEventListener("click", () => {
  const currentLang = document.documentElement.lang === "ar" ? "en" : "ar";
  setLanguage(currentLang);
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("monyLang", lang);

  // Update text content for elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update specific dynamic parts
  updateDynamicTranslations(lang);
}

function updateDynamicTranslations(lang) {
  // Update "All Products" title if it's currently showing that
  const productsTitle = document.getElementById("productsPageTitle");
  if (productsTitle) {
    if (
      productsTitle.innerText === "All Products" ||
      productsTitle.innerText === "كل المنتجات"
    ) {
      productsTitle.innerText = translations[lang].all_products;
    }
  }

  // Re-render products to update "EGP", "Quick View", etc.
  renderProductsGrid(currentProducts, "productsGrid");

  // Update back button in detail page if it's open
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.innerHTML = translations[lang].back;
  }

  // Re-render product detail if open
  if (
    document.getElementById("product-detail").classList.contains("active") &&
    currentProduct
  ) {
    viewProduct(currentProduct.id);
  }
}

// Mobile Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Search Toggle
searchToggle.addEventListener("click", () => {
  searchBar.classList.add("active");
  searchInput.focus();
});

function closeSearch() {
  searchBar.classList.remove("active");
  searchInput.value = "";
}

// Close search on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchBar.classList.contains("active")) {
    closeSearch();
  }
});

function runSearch() {
  const query = searchInput.value.toLowerCase().trim();
  if (query) {
    const results = products.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query),
    );
    showPage("products");

    // Smooth transition for search results
    const grid = document.getElementById("productsGrid");
    grid.style.opacity = "0";
    grid.style.transform = "translateY(20px)";

    setTimeout(() => {
      renderProductsGrid(results, "productsGrid");
      const lang = document.documentElement.lang || "en";
      document.getElementById("productsPageTitle").innerText = translations[
        lang
      ].search_title.replace("{query}", query);
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
      grid.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    }, 300);

    closeSearch();
    // Reset filters visually
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelector('.filter-tab[data-filter="all"]')
      .classList.add("active");
  }
}

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") runSearch();
});

// Sticky Navbar & Scroll Top
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scroll to Top Button visibility
    if (st > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }

    lastScrollTop = st <= 0 ? 0 : st;
  },
  false,
);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===== ROUTING ===== */
function showPage(pageId) {
  // Update history stack safely
  if (historyStack[historyStack.length - 1] !== pageId) {
    historyStack.push(pageId);
  }

  // Smoothly fade out current pages
  document.querySelectorAll(".page.active").forEach((page) => {
    page.style.opacity = "0";
    page.style.transform = "translateY(15px)";

    setTimeout(() => {
      page.classList.remove("active");
      page.style.opacity = "";
      page.style.transform = "";
    }, 300);
  });

  // Show target page after a slight delay for smooth transition
  setTimeout(() => {
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update nav active state
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${pageId}`) {
        link.classList.add("active");
      }
    });

    // Re-trigger animations
    initScrollAnimations();

    // Reset product title if returning to products naturally
    if (pageId === "products") {
      const lang = document.documentElement.lang || "en";
      const productsTitle = document.getElementById("productsPageTitle");
      if (
        productsTitle.innerText.includes("Search") ||
        productsTitle.innerText.includes("بحث")
      ) {
        productsTitle.innerText = translations[lang].all_products;
        filterProducts("all");
      }
    }
  }, 300);
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop(); // Remove current
    const prevPage = historyStack[historyStack.length - 1];
    showPage(prevPage);
    // showPage adds it back, so we pop to prevent infinite growth
    setTimeout(() => historyStack.pop(), 500);
  } else {
    showPage("home");
  }
}

function showCategory(category) {
  showPage("products");
  setTimeout(() => {
    filterProducts(category);
  }, 400); // Wait for page transition
}

/* ===== PRODUCT RENDERING ===== */
function renderProductsGrid(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (productsArray.length === 0) {
    container.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;"><i class="fas fa-search" style="font-size:3rem; color:var(--text-light); margin-bottom:20px;"></i><p style="font-size: 1.2rem; color:var(--text-light);">No products found matching your criteria.</p></div>';
    return;
  }

  const lang = document.documentElement.lang || "en";

  container.innerHTML = productsArray
    .map(
      (p, index) => `
    <div class="product-card scroll-animate fade-in-up" style="transition-delay: ${index * 0.05}s">
      <div class="prod-img-wrap" onclick="viewProduct(${p.id})">
        <img src="${p.image}" alt="${lang === "ar" && p.title_ar ? p.title_ar : p.title}" class="prod-img" loading="lazy">
        <div class="prod-overlay">
          <button class="btn btn-primary" onclick="event.stopPropagation(); viewProduct(${p.id})">
            <i class="fas fa-eye"></i> ${translations[lang].quick_view}
          </button>
        </div>
      </div>
      <div class="prod-info">
        <div class="prod-cat">${translations[lang][p.category] || p.category}</div>
        <h3 class="prod-title" onclick="viewProduct(${p.id})">${lang === "ar" && p.title_ar ? p.title_ar : p.title}</h3>
        <div class="prod-price">${translations[lang].egp} ${p.price}</div>
      </div>
    </div>
  `,
    )
    .join("");

  // Re-init animations for new elements
  setTimeout(initScrollAnimations, 100);
}

// Filtering
function filterProducts(category) {
  // Update tabs visually
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.filter === category) {
      tab.classList.add("active");
    }
  });

  const grid = document.getElementById("productsGrid");

  // Smooth out
  if (grid) {
    grid.style.opacity = "0";
    grid.style.transform = "translateY(20px)";
  }

  setTimeout(() => {
    if (category === "all") {
      currentProducts = [...products];
    } else {
      currentProducts = products.filter((p) => p.category === category);
    }
    // Apply sorting if any
    sortProductsInternal();

    // Smooth in
    if (grid) {
      grid.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
    }
  }, 300);
}

// Sorting logic
function sortProducts() {
  const grid = document.getElementById("productsGrid");
  if (grid) {
    grid.style.opacity = "0";
    grid.style.transform = "translateY(10px)";
  }

  setTimeout(() => {
    sortProductsInternal();
    if (grid) {
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
    }
  }, 300);
}

function sortProductsInternal() {
  const sortVal = document.getElementById("sortSelect").value;
  let sorted = [...currentProducts];

  if (sortVal === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortVal === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortVal === "name") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  renderProductsGrid(sorted, "productsGrid");
}

/* ===== PRODUCT DETAILS ===== */
let selectedSize = "";
let selectedColor = "";

function viewProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  currentProduct = product;
  selectedSize = product.sizes[0] || "";
  selectedColor = product.colors[0] || "";

  const container = document.getElementById("productDetailContent");
  const lang = document.documentElement.lang || "en";

  container.innerHTML = `
    <div class="pd-images slide-in-left scroll-animate">
      <div class="pd-main-img">
        <img id="pdMainImg" src="${product.image}" alt="${product.title}">
      </div>
      <div class="pd-thumbnails">
        ${product.images
          .map(
            (img, idx) => `
          <div class="pd-thumb ${idx === 0 ? "active" : ""}" onclick="changeMainImg(this, '${img}')">
            <img src="${img}" alt="Thumbnail">
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
    <div class="pd-info slide-in-right scroll-animate">
      <div class="pd-cat">${translations[lang][product.category] || product.category}</div>
      <h2 class="pd-title">${lang === "ar" && product.title_ar ? product.title_ar : product.title}</h2>
      <div class="pd-price">${translations[lang].egp} ${product.price}</div>
      <p class="pd-desc">${lang === "ar" && product.description_ar ? product.description_ar : product.description}</p>
      
      <div class="pd-options">
        <span class="pd-option-title">${translations[lang].select_size}</span>
        <div class="size-selector">
          ${product.sizes
            .map(
              (s, i) => `
            <button class="size-btn ${i === 0 ? "active" : ""}" onclick="selectSize(this, '${s}')">${s}</button>
          `,
            )
            .join("")}
        </div>
        
        <span class="pd-option-title">${translations[lang].select_color}</span>
        <div class="color-selector">
          ${product.colors
            .map(
              (c, i) => `
            <button class="color-btn ${i === 0 ? "active" : ""}" style="background-color: ${c}" onclick="selectColor(this, '${c}')" title="${c}"></button>
          `,
            )
            .join("")}
        </div>
      </div>
      
      <div class="pd-actions" style="display:flex; gap:10px; flex-wrap: wrap;">
        <button class="btn btn-outline" style="color:var(--text-color); border-color:var(--primary-color)" onclick="addToCartFromDetail()">
          <i class="fas fa-shopping-cart"></i> ${translations[lang].add_to_cart}
        </button>
        <button class="btn btn-primary" onclick="orderWhatsApp('${product.title.replace(/'/g, "\\'")}')">
          ${translations[lang].order_wa}
        </button>
      </div>
    </div>
  `;

  showPage("product-detail");
}

function changeMainImg(elem, src) {
  const mainImg = document.getElementById("pdMainImg");
  mainImg.style.opacity = "0";
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = "1";
  }, 200);

  document
    .querySelectorAll(".pd-thumb")
    .forEach((t) => t.classList.remove("active"));
  elem.classList.add("active");
}

function selectSize(elem, size) {
  selectedSize = size;
  document
    .querySelectorAll(".size-btn")
    .forEach((btn) => btn.classList.remove("active"));
  elem.classList.add("active");
}

function selectColor(elem, color) {
  selectedColor = color;
  document
    .querySelectorAll(".color-btn")
    .forEach((btn) => btn.classList.remove("active"));
  elem.classList.add("active");
}

function orderWhatsApp(productTitle) {
  const lang = document.documentElement.lang || "en";
  let msg = translations[lang].wa_message_template
    .replace("{product}", productTitle)
    .replace("{size}", selectedSize)
    .replace("{color}", selectedColor);

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ===== FORMS & UTILS ===== */
async function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  const btn = document.getElementById("newsletterBtn");
  const msgEl = document.getElementById("newsletterMessage");
  const lang = document.documentElement.lang || "en";

  if (!input.value) return;

  const email = input.value.trim().toLowerCase();

  // 1. Initial UI State
  btn.classList.add("loading");
  msgEl.innerText = translations[lang].newsletter_verifying;
  msgEl.className = "newsletter-message active";
  msgEl.style.color = "var(--text-light)";

  try {
    // 2. Strict Pattern & Reputation Check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

    // Whitelist for common premium domains to ensure "real" emails
    const trustedDomains = [
      "gmail.com",
      "outlook.com",
      "yahoo.com",
      "icloud.com",
      "hotmail.com",
      "me.com",
      "live.com",
      "msn.com",
      "aol.com",
    ];
    const domain = email.split("@")[1];
    const userPart = email.split("@")[0];

    // Detect keyboard mashing or fake patterns
    const commonFakes = [
      "test",
      "admin",
      "fake",
      "user",
      "noreply",
      "no-reply",
      "mail",
      "hello",
    ];
    const isMashed =
      /(.)\1{3,}/.test(userPart) ||
      userPart.length < 3 ||
      commonFakes.includes(userPart);
    const isFakeDomain = !domain.includes(".") || domain.length < 4;

    // Simulate a deep search/verification API call
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Final Validation Logic
    const isValid =
      emailRegex.test(email) &&
      trustedDomains.includes(domain) &&
      !isMashed &&
      !isFakeDomain &&
      email.length > 10;

    if (!isValid) {
      throw new Error("Invalid email");
    }

    // 3. Subscription Management
    let subscribers = JSON.parse(
      localStorage.getItem("monySubscribers") || "[]",
    );
    if (subscribers.includes(email)) {
      btn.classList.remove("loading");
      msgEl.innerText = translations[lang].toast_already_subscribed;
      msgEl.className = "newsletter-message active error";
      return;
    }

    subscribers.push(email);
    localStorage.setItem("monySubscribers", JSON.stringify(subscribers));

    // 4. Success State
    btn.classList.remove("loading");
    msgEl.innerText = translations[lang].newsletter_success;
    msgEl.className = "newsletter-message active success";
    showToast(translations[lang].toast_subscribed);

    setTimeout(() => {
      input.value = "";
      msgEl.className = "newsletter-message";
    }, 6000);
  } catch (err) {
    // 5. Error State (Professionally corrected as requested)
    btn.classList.remove("loading");
    msgEl.innerText = translations[lang].newsletter_error;
    msgEl.className = "newsletter-message active error";
    // Force a re-trigger of the shake animation
    msgEl.style.animation = "none";
    msgEl.offsetHeight; // trigger reflow
    msgEl.style.animation = null;
  }
}

/* ===== SUBSCRIBERS LIST ===== */
function toggleSubscribersList() {
  const modal = document.getElementById("subscribersModal");
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  } else {
    renderSubscribersList();
    modal.classList.add("active");
  }
}

function renderSubscribersList() {
  const listContainer = document.getElementById("subscribersList");
  const countContainer = document.getElementById("subscribersCount");
  const lang = document.documentElement.lang || "en";

  const subscribers = JSON.parse(
    localStorage.getItem("monySubscribers") || "[]",
  );

  countContainer.innerText = subscribers.length;

  if (subscribers.length === 0) {
    listContainer.innerHTML = `<p class="no-subs">${translations[lang].no_subscribers}</p>`;
    return;
  }

  listContainer.innerHTML = `
    <ul class="subs-ol">
      ${subscribers
        .map(
          (email, index) => `
        <li>
          <span class="subs-email">${email}</span>
          <button class="item-delete-btn" onclick="deleteSubscriber(${index})" title="${translations[lang].delete}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      `,
        )
        .join("")}
    </ul>
    <div class="subs-actions">
      <button class="clear-subs-btn" onclick="clearSubscribers()">
        <i class="fas fa-dumpster"></i> ${translations[lang].clear_all}
      </button>
    </div>
  `;
}

function deleteSubscriber(index) {
  let subscribers = JSON.parse(localStorage.getItem("monySubscribers") || "[]");
  subscribers.splice(index, 1);
  localStorage.setItem("monySubscribers", JSON.stringify(subscribers));
  renderSubscribersList();
  const lang = document.documentElement.lang || "en";
  showToast(translations[lang].subscriber_deleted);
}

function clearSubscribers() {
  const lang = document.documentElement.lang || "en";
  if (confirm(translations[lang].confirm_delete_all)) {
    localStorage.removeItem("monySubscribers");
    renderSubscribersList();
    showToast(translations[lang].all_subscribers_deleted);
  }
}

function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");

  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
    btn.style.backgroundColor = "#4CAF50";
    const lang = document.documentElement.lang || "en";
    showToast(translations[lang].toast_message_sent);

    setTimeout(() => {
      e.target.reset();
      btn.innerHTML = originalText;
      btn.style.backgroundColor = "";
    }, 3000);
  }, 800);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  // If already showing, clear it first for snappy feel
  toast.classList.remove("show");

  setTimeout(() => {
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }, 100);
}

/* ===== SCROLL ANIMATIONS (Intersection Observer) ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-active");
          // Optional: Stop observing once animated to keep the state
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: "0px 0px -50px 0px",
    },
  );

  elements.forEach((el) => {
    // Reset classes if we navigate pages to re-trigger
    if (el.closest(".page.active")) {
      observer.observe(el);
    }
  });
}

/* ===== CART UI LOGIC ===== */
const cartToggle = document.getElementById("cartToggle");
const cartModal = document.getElementById("cartModal");
const cartBadge = document.getElementById("cartBadge");

if (cartToggle) {
  cartToggle.addEventListener("click", toggleCart);
}

function toggleCart() {
  if (cartModal.classList.contains("active")) {
    cartModal.classList.remove("active");
    document.body.style.overflow = ""; // Enable scroll
  } else {
    renderCart();
    cartModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll
  }
}

// Close cart when clicking outside the sidebar
if (cartModal) {
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) toggleCart();
  });
}

function renderCart() {
  const listContainer = document.getElementById("cartItemsList");
  const totalContainer = document.getElementById("cartTotalPrice");
  const lang = document.documentElement.lang || "en";
  const items = cart.getItems();

  updateCartBadge();

  if (items.length === 0) {
    listContainer.innerHTML = `<div class="empty-cart-msg">
      <i class="fas fa-shopping-basket"></i>
      <p>${translations[lang].empty_cart}</p>
    </div>`;
    totalContainer.innerText = `0 ${translations[lang].egp}`;
    return;
  }

  listContainer.innerHTML = items
    .map(
      (item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${
          lang === "ar" && item.title_ar ? item.title_ar : item.title
        }</h4>
        <div class="cart-item-opts">
          <span>${translations[lang].size}: ${item.size}</span>
          <span class="color-dot-sm" style="background-color:${
            item.color
          }; border: 1px solid var(--border-color);"></span>
        </div>
        <div class="cart-item-price">${item.price} ${translations[lang].egp}</div>
        <div class="cart-item-qty-ctrl">
          <div class="qty-btns">
            <button onclick="updateCartItemQty(${index}, -1)"><i class="fas fa-minus"></i></button>
            <span>${item.quantity}</span>
            <button onclick="updateCartItemQty(${index}, 1)"><i class="fas fa-plus"></i></button>
          </div>
          <button class="cart-item-delete" onclick="removeCartItem(${index})" title="${
            translations[lang].delete
          }">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  totalContainer.innerText = `${cart.getTotalPrice()} ${translations[lang].egp}`;
}

function updateCartItemQty(index, change) {
  const item = cart.getItems()[index];
  cart.updateQuantity(index, item.quantity + change);
  renderCart();
}

function removeCartItem(index) {
  cart.removeItem(index);
  renderCart();
}

function updateCartBadge() {
  if (cartBadge) {
    const total = cart.getTotalItems();
    cartBadge.innerText = total;
    if (total > 0) {
      cartBadge.classList.add("visible");
    } else {
      cartBadge.classList.remove("visible");
    }
  }
}

function addToCartFromDetail() {
  if (!currentProduct || !selectedSize || !selectedColor) return;
  cart.addItem(currentProduct, selectedSize, selectedColor, 1);
  updateCartBadge();
  const lang = document.documentElement.lang || "en";
  showToast(translations[lang].added_to_cart);
  
  // Optionally open cart after adding
  setTimeout(toggleCart, 500);
}

function checkoutCart() {
  const items = cart.getItems();
  if (items.length === 0) return;

  const lang = document.documentElement.lang || "en";
  let msg = translations[lang].cart_checkout_msg;

  items.forEach((item, index) => {
    msg += `\n${index + 1}. ${
      lang === "ar" && item.title_ar ? item.title_ar : item.title
    }\n   📏 ${translations[lang].size}: ${item.size}\n   🎨 Color: ${
      item.color
    }\n   🔢 Qty: ${item.quantity}\n   💰 Price: ${item.price} ${
      translations[lang].egp
    }\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━\n💰 ${translations[lang].total}: ${cart.getTotalPrice()} ${
    translations[lang].egp
  }`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
