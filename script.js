// Data Structures
const websiteData = {
  pengurus: [
    {
      nama: "Pdt. Dr. Rully S. Runturambi, MM., M.Th",
      jabatan: "Gembala Sidang",
      foto: "assets/pak Rully.jpg" // Changed to consistent naming
    },
    {
      nama: "Sedang dalam proses pemilihan",
      jabatan: "Akan diumumkan",
      foto: "assets/logo_gkai.png"
    },
    {
      nama: "Sedang dalam proses pemilihan",
      jabatan: "Akan diumumkan",
      foto: "assets/logo_gkai.png"
    },
    {
      nama: "Sedang dalam proses pemilihan",
      jabatan: "Akan diumumkan",
      foto: "assets/logo_gkai.png"
    }
  ],
  
  galeri: [
    {
      judul: "Natal GKAI 2023",
      deskripsi: "Perayaan Natal bersama jemaat",
      foto: "assets/natal 2023.jpg" // Consistent naming
    },
    {
      judul: "Paskah GKAI 2025",
      deskripsi: "Kebaktian Paskah bersama jemaat",
      foto: "assets/paskah 2025.jpg"
    },
    {
      judul: "Ibadah Minggu",
      deskripsi: "Kebaktian minggu pagi",
      foto: "assets/logo_gkai.png"
    },
    {
      judul: "Ibadah Pemuda & Remaja",
      deskripsi: "Ibadah pemuda GKAI",
      foto: "assets/logo_gkai.png"
    },
    {
      judul: "Ibadah Persekutuan Wanita",
      deskripsi: "Ibadah wanita GKAI",
      foto: "assets/logo_gkai.png"
    },
  ],
  
  tentang: {
    visi: '"Menjadi wadah pembentukan bagi setiap orang Kristen untuk dapat bertumbuh dalam iman, melayani sesuai dengan karunianya, menjadi terang, dan mengabarkan Injil melalui setiap aspek kehidupan."',
    misi: [
      "Menciptakan dan memelihara suasana yang mendukung terjadinya persekutuan yang erat dalam jemaat",
      "Menggali karunia jemaat, serta mendorong penggunaannya untuk kemuliaan Tuhan",
      "Melatih jemaat agar menjadi dewasa dalam Kristus (1 Korintus 3:1)",
      "Membimbing jemaat untuk melakukan Amanat Agung Tuhan Yesus Kristus (Matius 28:19-20)"
    ]
  },
  
  renungan: [
    {
      date: new Date().toISOString().split('T')[0], // Today's date
      title: "Kasih yang Tidak Bersyarat",
      verse: "Tetapi Allah menunjukkan kasih-Nya kepada kita, oleh karena Kristus telah mati untuk kita, ketika kita masih berdosa.",
      reference: "Roma 5:8",
      content: "Kasih Allah kepada kita tidak bergantung pada kebaikan kita. Ketika kita masih berdosa dan tidak layak, Kristus sudah mati untuk kita. Renungkanlah betapa dalamnya kasih Tuhan yang tidak bersyarat ini, dan bagaimana kita harus menanggapi kasih tersebut dalam hidup sehari-hari."
    },
    {
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
      title: "Damai Sejahtera Allah",
      verse: "Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.",
      reference: "Filipi 4:6",
      content: "Dalam kehidupan yang penuh ketidakpastian, Tuhan menawarkan damai sejahtera yang melampaui akal. Kunci untuk mengalami damai ini adalah membawa segala kekhawatiran kita kepada Tuhan dalam doa, dengan hati yang penuh syukur."
    },
    {
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
      title: "Kuasa Doa",
      verse: "Jadi jika kamu yang jahat tahu memberi pemberian yang baik kepada anak-anakmu, apalagi Bapamu yang di sorga! Ia akan memberikan Roh Kudus kepada mereka yang meminta kepada-Nya.",
      reference: "Lukas 11:13",
      content: "Allah kita adalah Bapa yang baik yang rindu memberikan yang terbaik bagi anak-anakNya. Renungan ini mengajak kita untuk datang kepada Bapa dengan penuh keberanian, mengetahui bahwa Dia mendengar dan menjawab doa-doa kita."
    }
  ],
  
  jadwal: {
    wanita: [
      {
        hari: "Setiap Rabu",
        waktu: "Pukul 18.00 WIB",
        tempat: "Sesuai Warta Jemaat",
        ketua: "Ibu Dear Masda Siadari",
        tema: "-",
        grupWA: "https://wa.me/628888676104"
      }
    ],
    pemuda: [
      {
        hari: "Setiap Sabtu",
        waktu: "Pukul 18.00 WIB",
        tempat: "Sesuai Warta Jemaat",
        ketua: "Sdr. Ryonaldo",
        tema: "-",
        grupWA: "https://wa.me/628888676104"
      },

    ],
    pria: [
      {
        hari: "-",
        waktu: "Pukul - WIB",
        tempat: "-",
        pembina: "-",
        tema: "-",
        grupWA: "https://wa.me/628888676104"
      }
    ]
  }
};

// DOM Elements
const elements = {
  pengurusGrid: document.querySelector('.pengurus-grid'),
  galleryGrid: document.querySelector('.gallery-grid'),
  hamburger: document.querySelector('.hamburger'),
  navMenu: document.querySelector('.nav-menu'),
  currentYear: document.getElementById('current-year'),
  renunganTitle: document.getElementById('renungan-title'),
  renunganDate: document.getElementById('renungan-date'),
  renunganVerse: document.getElementById('renungan-verse'),
  renunganRef: document.getElementById('renungan-ref'),
  renunganText: document.getElementById('renungan-text'),
  prevDayBtn: document.getElementById('prev-day'),
  nextDayBtn: document.getElementById('next-day'),
  todayBtn: document.getElementById('today'),
  tabButtons: document.querySelectorAll('.tab-button'),
  tabContents: document.querySelectorAll('.tab-content')
};

// Utility Functions
const utils = {
  formatDate: (dateString) => {
    try {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  },
  
  handleImageError: (imgElement, placeholder = 'assets/placeholder.jpg') => {
    try {
      imgElement.onerror = null;
      imgElement.src = placeholder;
      imgElement.alt = 'Gambar tidak tersedia';
      imgElement.classList.add('placeholder-image');
    } catch (error) {
      console.error("Error handling image:", error);
    }
  },
  
  scrollToSection: (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

// Core Functions
const renderFunctions = {
  pengurus: () => {
    if (!elements.pengurusGrid) return;
    
    try {
      elements.pengurusGrid.innerHTML = websiteData.pengurus.map(pengurus => `
        <div class="pengurus-card">
          <div class="pengurus-img">
            <img src="${pengurus.foto}" alt="${pengurus.nama}" 
                 onerror="utils.handleImageError(this, 'assets/placeholder_pengurus.jpg')">
          </div>
          <div class="pengurus-info">
            <h3>${pengurus.nama}</h3>
            <p class="${pengurus.jabatan.includes('Sedang') ? 'text-muted' : ''}">
              ${pengurus.jabatan}
            </p>
          </div>
        </div>
      `).join('');
    } catch (error) {
      console.error("Error rendering pengurus:", error);
      elements.pengurusGrid.innerHTML = '<p>Gagal memuat data pengurus. Silakan refresh halaman.</p>';
    }
  },
  
  galeri: () => {
    if (!elements.galleryGrid) return;
    
    try {
      elements.galleryGrid.innerHTML = websiteData.galeri.map(item => `
        <div class="gallery-item">
          <img src="${item.foto}" alt="${item.judul}" 
               onerror="utils.handleImageError(this, 'assets/placeholder_gallery.jpg')">
          <div class="gallery-caption">
            <h3>${item.judul}</h3>
            <p>${item.deskripsi}</p>
          </div>
        </div>
      `).join('');
    } catch (error) {
      console.error("Error rendering galeri:", error);
      elements.galleryGrid.innerHTML = '<p>Gagal memuat galeri. Silakan refresh halaman.</p>';
    }
  },
  
  jadwal: () => {
    try {
      const tabContents = {
        wanita: document.getElementById('wanita'),
        pemuda: document.getElementById('pemuda'),
        pria: document.getElementById('pria')
      };

      for (const [key, contentElement] of Object.entries(tabContents)) {
        if (contentElement) {
          const schedules = websiteData.jadwal[key];
          contentElement.innerHTML = schedules.map(schedule => `
            <div class="schedule-card">
              <div class="schedule-day">
                <h3><i class="fas fa-calendar-alt"></i> ${schedule.hari}</h3>
                <p>${schedule.waktu}</p>
              </div>
              <div class="schedule-detail">
                <h4><i class="fas fa-church"></i> ${schedule.tempat}</h4>
                <p><strong>Ketua:</strong> ${schedule.ketua}</p>
                <p><strong>Tema:</strong> "${schedule.tema}"</p>
                <a href="${schedule.grupWA}" class="whatsapp-link" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp"></i> Grup WhatsApp
                </a>
              </div>
            </div>
          `).join('');
        }
      }
    } catch (error) {
      console.error("Error rendering jadwal:", error);
      document.querySelectorAll('.tab-content').forEach(content => {
        content.innerHTML = '<p>Gagal memuat jadwal. Silakan refresh halaman.</p>';
      });
    }
  }
};

// Renungan Functions
const renunganModule = {
  currentIndex: 0,
  
  display: (index) => {
    try {
      const renungan = websiteData.renungan[index];
      if (!renungan) return;
      
      elements.renunganTitle.textContent = renungan.title;
      elements.renunganDate.textContent = utils.formatDate(renungan.date);
      elements.renunganVerse.textContent = `"${renungan.verse}"`;
      elements.renunganRef.textContent = renungan.reference;
      elements.renunganText.textContent = renungan.content;
      
      // Update navigation buttons
      if (elements.prevDayBtn) elements.prevDayBtn.disabled = index === 0;
      if (elements.nextDayBtn) elements.nextDayBtn.disabled = index === websiteData.renungan.length - 1;
    } catch (error) {
      console.error("Error displaying renungan:", error);
      if (elements.renunganText) {
        elements.renunganText.textContent = "Gagal memuat renungan. Silakan refresh halaman.";
      }
    }
  },
  
  findToday: () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const index = websiteData.renungan.findIndex(item => item.date === today);
      return Math.max(index, 0);
    } catch (error) {
      console.error("Error finding today's renungan:", error);
      return 0;
    }
  },
  
  initNavigation: () => {
    try {
      if (elements.prevDayBtn) {
        elements.prevDayBtn.addEventListener('click', () => {
          if (renunganModule.currentIndex > 0) {
            renunganModule.currentIndex--;
            renunganModule.display(renunganModule.currentIndex);
          }
        });
      }
      
      if (elements.nextDayBtn) {
        elements.nextDayBtn.addEventListener('click', () => {
          if (renunganModule.currentIndex < websiteData.renungan.length - 1) {
            renunganModule.currentIndex++;
            renunganModule.display(renunganModule.currentIndex);
          }
        });
      }
      
      if (elements.todayBtn) {
        elements.todayBtn.addEventListener('click', () => {
          renunganModule.currentIndex = renunganModule.findToday();
          renunganModule.display(renunganModule.currentIndex);
        });
      }
    } catch (error) {
      console.error("Error initializing renungan navigation:", error);
    }
  }
};

// Schedule Tabs Functionality
const scheduleModule = {
  initTabs: () => {
    try {
      if (elements.tabButtons && elements.tabContents) {
        elements.tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            elements.tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active tab content
            elements.tabContents.forEach(content => {
              content.classList.remove('active');
              content.hidden = true;
            });
            
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
              activeContent.classList.add('active');
              activeContent.hidden = false;
            }
          });
        });
      }
    } catch (error) {
      console.error("Error initializing schedule tabs:", error);
    }
  }
};

// Navigation Functions
const navigationModule = {
  initMobileMenu: () => {
    try {
      if (elements.hamburger && elements.navMenu) {
        elements.hamburger.addEventListener('click', () => {
          elements.navMenu.classList.toggle('active');
          elements.hamburger.setAttribute('aria-expanded', 
            elements.navMenu.classList.contains('active'));
        });
      }
    } catch (error) {
      console.error("Error initializing mobile menu:", error);
    }
  },
  
  initSmoothScrolling: () => {
    try {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          
          // Update active nav item
          document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
          });
          this.classList.add('active');
          
          // Close mobile menu if open
          if (elements.navMenu && elements.navMenu.classList.contains('active')) {
            elements.navMenu.classList.remove('active');
            elements.hamburger.setAttribute('aria-expanded', 'false');
          }
          
          // Scroll to section
          utils.scrollToSection(targetId);
        });
      });
    } catch (error) {
      console.error("Error initializing smooth scrolling:", error);
    }
  },
  
  initScrollSpy: () => {
    try {
      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');
        
        let current = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
          }
        });
        
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
          }
        });
      });
    } catch (error) {
      console.error("Error initializing scroll spy:", error);
    }
  }
};

// Main Initialization
const init = () => {
  try {
    // Set current year in footer
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }
    
    // Render all content sections
    renderFunctions.pengurus();
    renderFunctions.galeri();
    renderFunctions.jadwal();
    
    // Initialize renungan
    renunganModule.currentIndex = renunganModule.findToday();
    renunganModule.display(renunganModule.currentIndex);
    renunganModule.initNavigation();
    
    // Initialize schedule tabs
    scheduleModule.initTabs();
    
    // Initialize navigation
    navigationModule.initMobileMenu();
    navigationModule.initSmoothScrolling();
    navigationModule.initScrollSpy();
    
  } catch (error) {
    console.error("Error during initialization:", error);
  }
};

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);