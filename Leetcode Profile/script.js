document.querySelector('.marker').addEventListener('mouseover', function() {
    document.querySelector('.rating-value').innerHTML = '1,443&nbsp;<span style="color: rgb(255, 34, 34); font-style: 1100;">&#x2198;</span>';
    document.querySelector('.ranking-heading').textContent = 'Sep 02, 2023';
    document.querySelector('.attended-heading').innerHTML = 'Rank&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solved<br><span style="font-weight: 600; color: white;">18,995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 / 4</span>';
    document.querySelector('.ranking-value').textContent = 'Biweekly contest 112';
    document.querySelector('.b-img').style.display = 'none'; // Hide the image
});

document.querySelector('.marker').addEventListener('mouseout', function() {
    document.querySelector('.rating-value').textContent = '1,443';
    document.querySelector('.ranking-heading').textContent = 'Global Ranking';
    document.querySelector('.attended-heading').textContent = 'Attended';
    document.querySelector('.ranking-value').innerHTML = '349,170<span style="color: rgba(255 255, 255, 0.3);">/542,636</span>';
    document.querySelector('.b-img').style.display = '';
});