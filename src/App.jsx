import{BrowserRouter,Routes,Route, Navigate} from'react-router-dom';
import Global from './styles/Styled';
import PagenotFOund from './UI/PagenotFound';

import Accounts from './UI/Account';
import Settings from './UI/Setting';
import {Users} from './UI/Cabins';
import Cabins from './UI/Users';
import Booking from './UI/Booking';
import Dashboard from './UI/Dashboard';
import AppLayout from './UI/AppLayout';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Toaster} from 'react-hot-toast';
import Pagination from './Example/Inre';
import { Bookings } from './assets/Features/Booking/Bookings';
import Checkin from './assets/Features/Booking/Checkin';
import LoginForm from './assets/Features/Authentication/Login';
import { ProtectedRoute } from './UI/Protected';

import {IsDarkMode} from './UI/Darkmode';
function App() {
const client=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:500,
      
    }
  }
})

  return (
   <IsDarkMode>

   <QueryClientProvider client={client} >
    <ReactQueryDevtools initialIsOpen={false} />
   <Global></Global>
   <BrowserRouter>
   <Routes>
    <Route  index  element={<Navigate replace to={'login'}></Navigate>}></Route>
    <Route element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='bookings' element={<Booking/>}/>
    <Route path='bookings/:id' element={<Bookings/>}/>
    <Route path='checkin/:id' element={<Checkin/>}/>
    <Route path='cabins' element={<Users/>}/>
    <Route path='users' element={<Cabins/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='account' element={<Accounts/>}/>
    </Route>
    <Route path='login' element={<LoginForm/>}></Route>
    <Route path='random' element={<Pagination/>}/>
    <Route path='*' element={<PagenotFOund/>}></Route>
   </Routes>
   </BrowserRouter>
   <Toaster gutter={10} position='top center' toastOptions={{
    success:{
      duration:3000
    },
    error:{
      duration:5000
    },
    style:{ color:'black',
      padding:'0.8rem 1rem',
      backgroundColor:'white',
      textAlign:'center',
      fontSize:'1rem',
      height:'1rem'}

   }}
    containerStyle={{
    
   margin:'8px'
   }}

   />
   </QueryClientProvider>

   </IsDarkMode>
  )
}

export default App
 