const Header = {
  render(){
    return /*html*/`<header>
    <div class="bg-orange-600 flex justify-end">
      <ul class="flex">
        <li><a href="/signin" class="nav-item__link">Đăng nhập</a></li>
        <li><a href="/signup" class="nav-item__link">Đăng ký</a></li>
        <li><a href="/admin/dashboard" class="nav-item__link">Admin</a></li>
      </ul>
    </div>
    <div class="bg-indigo-800 py-4">
        <a href=""><img src="https://picsum.photos/1500/500"  alt="" class="mx-auto  w-40"></a>
      </div>
    <div class="bg-orange-600 flex">
      <ul class="flex">
        <li><a href="/" class="nav-item__link">Trang chủ</a></li>
        <li><a href="/tuyen-sinh" class="nav-item__link">Tuyển sinh</a></li>
        <li><a href="/chuong-trinh-dao-tao" class="nav-item__link">Chương trình đào tạo</a></li>
        <li><a href="/tuyen-dung" class="nav-item__link">Tuyển dụng</a></li>
        <li><a href="/goc-sinh-vien" class="nav-item__link">Góc sinh viên</a></li>
      </ul>
    </div>
  </header>`;
  }
}
export default Header;