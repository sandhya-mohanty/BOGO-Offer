function selectBox(box, price){
  document.querySelectorAll('.box').forEach(b =>b.classList.remove('box--selected'));
  box.classList.add('box--selected');
  box.querySelector('input').checked = true;
  document.getElementById('total-price').textContent= `Total: $${price}.00 USD`;
}
window.onload=()=>{
  const selectedBox = document.querySelector('.box--selected');
  const price = selectedBox.querySelector('.box_price--new').textContent;
  document.getElementById('total-price').textContent= `Total: ${price}`;
};