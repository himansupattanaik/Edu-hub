import {
  Add,
  BadgeOutlined,
  DashboardCustomizeOutlined,
  GridView,
  KeyOutlined,
  NotificationsOutlined,
  Payment,
  PeopleOutline,
  PersonOutline,
  QuizOutlined,
  ReviewsOutlined,
  SettingsOutlined,
  TopicOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

const useAdminSidebarItems = () => {
  return [
    {
      _id: "1",
      title: "Dashboard",
      route: "/admin",
      icon: <GridView />,
    },
    {
      _id: "2",
      // title: "Courses",
      title: "Categories",
      icon: <TopicOutlined />,
      submenus: [
        {
          _id: "2-0",
          route: "/admin/category",
          title: "Dashboard",
          icon: <GridView className="!text-lg" />,
        },
        {
          _id: "2-1",
          route: "/admin/category/manage-category",
          title: "ManageCategories",
          icon: <DashboardCustomizeOutlined className="!text-lg" />,
        },
        {
          _id: "2-1",
          route: "/admin/category/manage-language",
          title: "ManageLanguages",
          icon: <DashboardCustomizeOutlined className="!text-lg" />,
        },
      ],
    },
    {
      _id: "3",
      title: "Tutors",
      icon: <PersonOutline />,
      submenus: [
        {
          _id: "3-0",
          route: "/admin/tutors",
          title: "Dashboard",
          icon: <GridView className="!text-lg" />,
        },
        {
          _id: "3-1",
          route: "/admin/tutors/pending-tutors",
          title: "PendingRequests",
          icon: <DashboardCustomizeOutlined className="!text-lg" />,
        },
        {
          _id: "3-2",
          route: "/admin/tutors/accepted-tutors",
          title: "AcceptedTutors",
          icon: <DashboardCustomizeOutlined className="!text-lg" />,
        },
        {
          _id: "3-3",
          route: "/admin/tutors/tutor-statistics",
          title: "Tutorstatistics",
          icon: <BarChartOutlinedIcon className="!text-lg" />,
        },
      ],
    },
    {
      _id: "4",
      title: "Students",
      icon: <PeopleOutline />,
      submenus: [
        {
          _id: "4-0",
          route: "/admin/students",
          title: "Dashboard",
          icon: <GridView className="!text-lg" />,
        },
        {
          _id: "4-1",
          route: "/admin/students/student-details",
          title: "StudentDetails",
          icon: <GridView className="!text-lg" />,
        },
        {
          _id: "4-3",
          route: "/admin/students/studentstatistics",
          title: "statistics",
          icon: <BarChartOutlinedIcon className="!text-lg" />,
        },
      ],
    },
    {
      _id: "5",
      title: "Courses",
      route: "/admin/courses/course-details",
      icon: <TopicOutlined />,
    },
    {
      _id: "6",
      title: "quizzes",
      route: "/admin/quizzes",
      icon: <QuizOutlined />,
    },
    {
      _id: "7",
      title: "ManageReviews",
      route: "/admin/manage-reviews",
      icon: <ReviewsOutlined />,
    },
    {
      _id: "8",
      title: "payouts",
      route: "/admin/payouts",
      icon: <Payment />,
    },
    {
      _id: "9",
      title: "Settings",
      icon: <SettingsOutlined />,
      submenus: [
        {
          _id: "9-0",
          route: "/admin/my-profile",
          title: "MyProfile",
          icon: <BadgeOutlined />,
        },
        {
          _id: "9-1",
          route: "/admin/notifications",
          title: "Notifications",
          icon: <NotificationsOutlined />,
        },
        {
          _id: "9-2",
          route: "/admin/change-password",
          title: "ChangePassword",
          icon: <KeyOutlined />,
        },
      ],
    },
  ];
};
export default useAdminSidebarItems;
