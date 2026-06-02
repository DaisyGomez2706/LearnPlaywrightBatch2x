
// -------------------------------------------------------
// 1. camelCase - variables, functions (standard in JS)
// -------------------------------------------------------
var firstName = "Alice";
var lastName = "Smith";
var totalAmount = 100;
var isActive = true;
var userEmailAddress = "alice@example.com";
var numberOfItemsInCart = 5;
function getUserData() { }
function calculateTotal() { }
function fetchUserProfileById() { }
function updateShoppingCartItemQuantity() { }

// -------------------------------------------------------
// 2. snake_case - less common in JS, used in some APIs
// -------------------------------------------------------
//← Edit chapter_02_Javascript_Concepts\07_Identifiers_Part2.js

// -------------------------------------------------------
// 2. snake_case - less common in JS, used in some APIs
// -------------------------------------------------------
var first_name = "Bob";
var last_name = "Jones";
var total_amount = 200;
var is_active = false;
var user_email_address = "bob@example.com";
var database_connection_string = "Server=localhost;Database=mydb";
var max_retry_count = 3;
function get_user_by_id() { }
function calculate_order_total() { }

// -------------------------------------------------------
// 3. PascalCase - classes, constructors, components
//← Edit chapter_02_Javascript_Concepts\07_Identifiers_Part2.js
// -------------------------------------------------------
// 3. PascalCase - classes, constructors, components
// -------------------------------------------------------
class UserAccount { }
class CarModel { }
class ShoppingCartManager { }
class DatabaseConnectionPool { }
function Person(name) { this.name = name; }
function EmployeeDetails(name, role) { this.name = name; this.role = role; }
// React / UI components: <UserProfile />  <ShoppingCart />  <OrderHistoryTable />

// -------------------------------------------------------
// 4. UPPER_CASE (SCREAMING_SNAKE_CASE) - constants (by convention)
// -------------------------------------------------------
← Edit chapter_02_Javascript_Concepts\07_Identifiers_Part2.js
// 4. UPPER_CASE (SCREAMING_SNAKE_CASE) - constants (by convention)
// -------------------------------------------------------
var MAX_LIMIT = 100;
var API_KEY = "abc123";
var PI_VALUE = 3.14;
var DAYS_OF_WEEK = 7;
var DATABASE_HOST = "localhost";
var DEFAULT_TIMEOUT_MS = 5000;
var MAX_CONNECTIONS = 50;
var ERROR_CODE_NOT_FOUND = 404;
// Often used for environment variables and configuration
// process.env.NODE_ENV, process.env.PORT, etc.

// -------------------------------------------------------
// 5. kebab-case - ❌ NOT allowed in JS identifiers
// -------------------------------------------------------
← Edit chapter_02_Javascript_Concepts\07_Identifiers_Part2.js

// -------------------------------------------------------
// 6. Mixed / Hungarian notation (rare/legacy)
// -------------------------------------------------------
var strName = "Charlie";    // string
var numAge = 30;            // number
var boolFlag = true;        // boolean
var arrItems = [1, 2, 3];   // array
var objUser = { id: 1 };    // object
var fnCallback = function() { };  // function
var elContainer = null;     // DOM element
var dbConnection = null;    // database reference
var strName = "Charlie";   // string
var numAge = 30;           // number

// -------------------------------------------------------
// Examples showing which case to use where
// -------------------------------------------------------
← Edit chapter_02_Javascript_Concepts\07_Identifiers_Part2.js
// -------------------------------------------------------
// Examples showing which case to use where
// -------------------------------------------------------
function calculateTotalPrice() { }   // camelCase ✅ function
var totalPrice = 50;                 // camelCase ✅ variable
var MAX_RETRY_COUNT = 3;             // UPPER_CASE ✅ constant
var database_name = "shop_db";       // snake_case ✅ sometimes seen in config
class ShoppingCart { }               // PascalCase ✅ class

// Summary:
// -------------+------------------------------
// Case         | Used for
// -------------+------------------------------
// camelCase    | variables, functions, methods
// PascalCase   | classes, constructors, components
// UPPER_CASE   | constants, env variables
// snake_case   | config keys, file names (Node.js)
// kebab-case   | ❌ NOT valid in JavaScript