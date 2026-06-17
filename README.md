react Redux (little old) 
redux toolkit(recent and advanced)

why?
- resolve props drilling
- global state management (database for logics in frontend)

-store (think of as institution with frontend,backend,api trainer) in main.jsx to allow App to access this store.
-Slice : each trainer/feature inside store

store App store

-state : variable that handles react component's dynamic nature.

-reducer (similar to setState()) : fn to manipulate states globally.

-action type : a fn triggered by user (fn defined in reducer and called in action type)

-action payload : a data coming from the user.

-useDispatch() hook : used to trigger the fn from the component. [send data to store]

-useSelector() hook : used to get data from store. [get data from store]
