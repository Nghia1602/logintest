import React, {useState} from "react";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { House,Contact,BookOpen,SquareUser,MessageCircleMore,} from 'lucide-react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
  getItem(<Link to="/home">Trang chủ</Link>, '1',<House/>),
  getItem(<Link to="/list-student">Danh sách lớp</Link>, '2',<Contact />),
  getItem('Môn học', '3',<BookOpen />),
  getItem('Giáo viên', '4',<SquareUser /> ),
  getItem('Chat', '9', <MessageCircleMore />),
];
  return <Sider collapsible   width="250px" style={{background:"#ffffff" }} >
        <div className=" flex items-center w-[250px] h-[75px] justify-center border-b-[1px] border-gray-200 shadow-md ">
            <img src="logo_thaco_industries.png" alt="" style ={{height:"40px", display:"flex", }}/>
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{width:"100%",borderInlineEnd:"0px"}}  />
      </Sider>
};
export default SiderLayout;
