import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import KaryawanList from "views/TableList/KaryawanList";
import RolesList from "views/TableList/RolesList";
import DepartmentList from "views/TableList/DepartmentList";
import NewRoles from "views/TableList/insertion/NewRoles";
import NewKaryawan from "views/TableList/insertion/NewKaryawan";
import NewDepartemen from "views/TableList/insertion/NewDepartement";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashbor",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/Management",
    name: "Manajemen",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "Karyawan",
    icon: "content_paste",
    component: KaryawanList,
    layout: "/admin"
  },
  {
    path: "/departemen",
    name: "Departemen",
    icon: LibraryBooks,
    component: DepartmentList,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Jabatan",
    icon: BubbleChart,
    component: RolesList,
    layout: "/admin"
  },
  {
    path: "/roles/new",
    name: "Jabatan Baru",
    component: NewRoles,
    layout: "/admin"
  },
  {
    path: "/departemen/new",
    name: "Departemen Baru",
    component: NewDepartemen,
    layout: "/admin"
  },
  {
    path: "/list/new",
    name: "Karyawan Baru",
    component: NewKaryawan,
    layout: "/admin"
  },
];

export default dashboardRoutes;
