import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4"> Hello, well come to my app!</h1>
            <p className="lead mb-4">
              Tổng quan về Apple tập đoàn công nghệ hàng đầu Thành lập từ năm
              1976, trải qua 7 đời CEO với 6 dòng sản phẩm chính. Hơn 1,4 tỷ
              người sử dụng và trở thành thương hiệu hàng đầu thế giới. Đó là
              những gì cơ bản mà mọi người sẽ nghĩ khi nhắc đến tập đoàn Apple.
              Apple Inc. là một tập đoàn chuyên về lĩnh vực công nghệ của Mỹ, có
              trụ sở đặt tại bang California. Ngày Apple chính thức được thành
              lập đúng vào ngày Cá tháng tư, ngày 1/4/1976, khi đó, Apple có tên
              đầy đủ là Apple Computer, Inc. Cái tên này được sử dụng đến những
              năm sau đó cho đến năm 2007 thì chuyển thành cái tên sử dụng hiện
              nay là Apple Inc. Nhà sáng lập của Apple ngoài cố chủ tịch Steve
              Jobs, người mà bất cứ ai cũng biết thì vẫn còn 2 doanh nhân khác
              nữa là Steve Wozniak và Ronald Wayne. Hiện tại, CEO của Tập đoàn
              Apple chính là Tim Cook.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Liện hệ
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
