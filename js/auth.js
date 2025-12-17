<script>
async function protectPost(correctHash) {
  const input = prompt("Nhập mật khẩu để xem bài viết:");

  if (!input) {
    document.body.innerHTML = "<h2>❌ Bạn chưa nhập mật khẩu</h2>";
    return;
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

  if (hashHex !== correctHash) {
    document.body.innerHTML = "<h2>❌ Sai mật khẩu</h2>";
  } else {
    document.getElementById("protected-content").style.display = "block";
  }
}
</script>
