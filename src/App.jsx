import React, { Component } from "react";

class App extends Component {
  render() {
    return (

      <div className="contianer">
        <nav className="navbar is-info">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fas fa-home fa-lg fa-fw"></i>
              </span>
            </a>
            <p className="navbar-item">
              <h6>FLOWACCOUNT.COM</h6>
            </p>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">

              </div>
            </div>
            <div className="navbar-end">

              <div className="navbar-item">
                <p class="buttons">
                  <a class="button is-success">
                    <span className="icon">
                      <i class="fab fa-github fa-lg"></i>
                    </span>
                    <span>สมัครพรีเมี่ยม</span>
                  </a>
                  <button className="button is-warning"><span>อังกฤษ</span></button>
                  <a className="button is-warning"><span>ไทย</span></a>
                </p>
              </div>
              <a className="navbar-item" href="/">
                <span className="icon">
                  <i className="fas fa-cog fa-lg"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>

        <nav className="hero">
          <div className="level">
            <div className="level-left">
              <p><h1>
              ยินดีต้อนรับ zero71st@gmail.com | Kasem Wongs
                </h1></p>
            </div>
            <div className="level-right">
              <a>สิทธิพิเศษ</a>
              <divider />
              <a>แชร์เพื่อสนับนุนเรา คลิ๊ก></a>
            </div>
          </div>
        </nav>
        <div className="columns">
          <div className="column is-one-quarter">
            <nav className="panel">
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-home"></i>
                </span>
                <span>หน้าแรก</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-star is-large"></i>
                </span>
                <span>ภาพรวม</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <span>ขาย</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>ซื้อ</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-money-bill"></i>
                </span>
                <span>ค่าใช้จ่าย</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-money-bill-wave"></i>
                </span>
                <span>เงินเดือน</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-paragraph"></i>
                </span>
                <span>รายงาน</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-box"></i>
                </span>
                <span>สินค้า</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book"></i>
                </span>
                <span>สมุดรายชื่อ</span>
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-cog"></i>
                </span>
                <span>การตั้งค่า</span>
              </a>
            </nav>
          </div>
          <div className="column">
            <div className="box">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
