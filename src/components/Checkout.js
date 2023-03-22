import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Giỏ hàng của bạn</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Địa chỉ thanh toán</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fistname"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Tên hợp lệ là bắt buộc.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Họ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Họ hợp lệ là bắt buộc.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Tên người dùng
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Tên đăng nhập..."
                      required=""
                    />
                    <div className="invalid-feedback">
                      Tên người dùng của bạn là bắt buộc.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Nhập email của bạn ..."
                  />
                  <div className="invalid-feedback">
                    Vui lòng nhập địa chỉ email hợp lệ! Để cập nhật thông tin
                    vận chuyển.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Địa chỉ nhận hàng 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="nhập địa chỉ..."
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Địa chỉ nhận hàng 2{" "}
                    <span className="text-muted">(Không bắt buộc)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Nhập địa chỉ..."
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="address2" className="form-label">
                    Số điện thoại <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Nhập sđt..."
                  />
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Hình thức thanh toán</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Thẻ tín dụng
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Thẻ ghi nợ
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    ship COD
                  </label>
                </div>
              </div>
              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
