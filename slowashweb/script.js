
window.addEventListener('load',()=>{
    setTimeout(()=>{document.querySelector('#loader').classList.add('hide')},1800);
    setTimeout(()=>{document.querySelector('.site').classList.add('split-on')},1200);
    });
    
    function scrollToPanel(targetId,panelSelector){
    const target=document.getElementById(targetId);
    const panel=document.querySelector(panelSelector);
    if(target&&panel){panel.scrollTo({top:target.offsetTop,behavior:'smooth'});}
    }
    
    document.querySelectorAll('.scroll-right').forEach(btn=>{
    btn.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.site').classList.add('split-on');
    setTimeout(()=>{scrollToPanel(btn.dataset.target,'.right-panel')},300);
    });
    });
    
    document.querySelectorAll('.scroll-left').forEach(btn=>{
    btn.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector('.site').classList.add('split-on');
    setTimeout(()=>{scrollToPanel(btn.dataset.target,'.left-panel')},300);
    });
    });
    
    document.querySelectorAll('.choice').forEach(box=>{
    box.addEventListener('click',()=>{
    const group=box.dataset.choiceGroup;
    document.querySelectorAll(`.choice[data-choice-group="${group}"]`).forEach(el=>el.classList.remove('selected'));
    box.classList.add('selected');
    const paddingSlots=document.getElementById('paddingSlots');
    if(group==='clothes'){
    if(box.dataset.type==='padding'){paddingSlots.classList.add('show')}
    else{paddingSlots.classList.remove('show')}
    }
    });
    });
    
    document.querySelectorAll('.slot.available').forEach(slot=>{
    slot.addEventListener('click',()=>{
    document.querySelectorAll('.slot.available').forEach(el=>el.classList.remove('selected'));
    slot.classList.add('selected');
    });
    });
    
    document.getElementById('reserveBtn').addEventListener('click',()=>{
    alert('접수가 완료되었습니다.\n선택하신 픽업 날짜에 수령해주세요.');
    });
    
    const remindToggle=document.getElementById('remindToggle');
    remindToggle.addEventListener('click',()=>{
    if(remindToggle.textContent==='ON'){remindToggle.textContent='OFF';remindToggle.classList.add('off')}
    else{remindToggle.textContent='ON';remindToggle.classList.remove('off')}
    });
    
    document.querySelectorAll('.community-category').forEach(category=>{
    category.addEventListener('click',()=>{
    const selectedCategory=category.dataset.communityCategory;
    document.querySelectorAll('.community-category').forEach(el=>el.classList.remove('selected'));
    category.classList.add('selected');
    document.getElementById('postCategory').value=selectedCategory;
    document.querySelectorAll('.post-card').forEach(post=>{
    post.style.display=post.dataset.postCategory===selectedCategory?'block':'none';
    });
    });
    });
    
    document.getElementById('postBtn').addEventListener('click',()=>{
    const category=document.getElementById('postCategory').value;
    const name=document.getElementById('postName').value.trim()||'anonymous';
    const title=document.getElementById('postTitle').value.trim();
    const body=document.getElementById('postBody').value.trim();
    if(!title||!body){alert('제목과 내용을 입력해주세요.');return;}
    const post=document.createElement('article');
    post.className='post-card';
    post.dataset.postCategory=category;
    post.innerHTML=`<div class="post-meta"><span>${category}</span><span>${name}</span></div><h3>${title}</h3><p>${body}</p>`;
    document.getElementById('postList').prepend(post);
    document.getElementById('postTitle').value='';
    document.getElementById('postBody').value='';
    document.querySelectorAll('.community-category').forEach(el=>{if(el.dataset.communityCategory===category){el.click()}});
    });
    
    const hero=document.querySelector('.hero');
    const leftPanelForHero=document.querySelector('.left-panel');
    const heroImages=[
    'scroll1.jpeg','scroll2.jpeg','scroll3.jpeg','scroll4.jpeg',
    'scroll5.jpeg','scroll6.jpeg','scroll7.jpeg','scroll8.jpeg',
    'scroll9.jpeg','scroll10.jpeg','scroll11.jpeg','scroll12.jpeg'
    ];
    
    let heroIndex=0;
    if(hero){
    hero.style.setProperty('--hero-bg',`url(${heroImages[0]})`);
    setInterval(()=>{
    heroIndex=(heroIndex+1)%heroImages.length;
    hero.style.setProperty('--hero-bg',`url(${heroImages[heroIndex]})`);
    },1800);
    }
    
    if(hero&&leftPanelForHero){
    leftPanelForHero.addEventListener('scroll',()=>{
    const scrollY=leftPanelForHero.scrollTop;
    const fadeStart=window.innerHeight*0.35;
    const fadeEnd=window.innerHeight*0.95;
    let opacity=1-((scrollY-fadeStart)/(fadeEnd-fadeStart));
    opacity=Math.max(0,Math.min(1,opacity));
    hero.style.setProperty('—hero-opacity',opacity);
    });
    }
    
    
    function mobileScrollToSection(targetId){

        const target = document.getElementById(targetId);
      
        if(!target) return;
      
        target.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });
      
      }
      
      document.querySelectorAll('[data-target]').forEach(btn=>{
      
        btn.addEventListener('click',(e)=>{
      
          if(window.innerWidth <= 768){
      
            e.preventDefault();
      
            mobileScrollToSection(
              btn.dataset.target
            );
      
          }
      
        });
      
      });


const workshopCard = document.getElementById('workshopCard');
const workshopPosters = document.getElementById('workshopPosters');

if(workshopCard && workshopPosters){
  workshopCard.addEventListener('click',()=>{
    workshopPosters.classList.toggle('show');

    if(workshopPosters.classList.contains('show')){
      setTimeout(()=>{
        workshopPosters.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });
      },120);
    }
  });
}

