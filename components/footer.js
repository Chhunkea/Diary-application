// Footer: footer component
class footerElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 

` <footer>
        <!-- Links: social link section -->
        <div class="social-link">
            <img src="/asset/image-homepage/logo_.png" alt="anb school">
            <div class="svg-icon">
                <!-- Gitlab -->
                <a href="https://git.clp.kr/anbschool/2nd/cybernexus/kim-chhunkea/diary-personal-project/-/tree/main?ref_type=heads">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill="white"/>
                        <path d="M10 14.616L8.159 8.95003H11.841L10 14.616ZM10 14.616L5.578 8.95003H8.158L10 14.616ZM5.578 8.95003L10 14.616L5.157 11.098C5.09177 11.0506 5.04326 10.9837 5.01846 10.907C4.99366 10.8303 4.99385 10.7476 5.019 10.671L5.579 8.94903L5.578 8.95003ZM5.578 8.95003L6.688 5.53703C6.70025 5.49865 6.72439 5.46515 6.75692 5.44139C6.78946 5.41762 6.82871 5.40481 6.869 5.40481C6.90929 5.40481 6.94854 5.41762 6.98107 5.44139C7.01361 5.46515 7.03774 5.49865 7.05 5.53703L8.159 8.95003L5.579 8.94903L5.578 8.95003ZM10 14.616L11.841 8.95003L14.421 8.94903L10 14.616ZM14.422 8.94903L14.982 10.671C15.0069 10.7479 15.0068 10.8306 14.9816 10.9074C14.9565 10.9841 14.9076 11.0509 14.842 11.098L10 14.616L14.422 8.94903ZM14.422 8.94903H11.842L12.95 5.53603C12.962 5.49727 12.9861 5.46337 13.0188 5.43929C13.0514 5.41521 13.0909 5.40222 13.1315 5.40222C13.1721 5.40222 13.2116 5.41521 13.2442 5.43929C13.2769 5.46337 13.301 5.49727 13.313 5.53603L14.422 8.94903Z" fill="white"/>
                    </svg>
                </a>
                
                <!-- Notion -->
                <a href="https://www.notion.so/Daily-studying-8a4aef4d0655441e922d2b0eef109848">
                    <svg width="24" height="24" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8715 9.6545V15.6485C16.8545 16.3455 16.5165 16.7305 15.8185 16.7885C15.0175 16.8545 14.2125 16.8965 13.4085 16.9445C11.7885 17.0445 10.1675 17.1425 8.54753 17.2385C7.11253 17.3235 5.67753 17.3985 4.24453 17.4955C3.61053 17.5365 3.11154 17.3365 2.76054 16.7925C2.65654 16.6315 2.52354 16.4865 2.40554 16.3325C1.80554 15.5585 1.21054 14.7825 0.607535 14.0125C0.202886 13.5152 -0.0122057 12.8905 0.000535216 12.2495C0.0205352 8.8395 0.00853521 5.4315 0.0105352 2.0225C0.0105352 1.8935 0.0205352 1.7655 0.0405352 1.6385C0.132535 1.1385 0.442535 0.828502 0.948535 0.780502C1.77653 0.702502 2.61754 0.648502 3.45254 0.585502L7.44254 0.291501C8.72054 0.198501 9.99854 0.109501 11.2765 0.00850139C11.9171 -0.0436361 12.5541 0.145384 13.0625 0.538502C14.1885 1.3555 15.3325 2.1455 16.4745 2.9425C16.6067 3.0273 16.7138 3.14593 16.7847 3.28608C16.8555 3.42622 16.8876 3.58278 16.8775 3.7395C16.8665 5.7105 16.8715 7.6825 16.8715 9.6545ZM15.7095 9.7315V4.6275C15.7095 4.1355 15.5365 3.9655 15.0595 3.9935L10.9095 4.2295L5.81954 4.5275C5.22154 4.5625 4.62354 4.5975 4.02554 4.6375C3.70854 4.6595 3.56454 4.7995 3.51754 5.1105C3.50554 5.2005 3.50054 5.2905 3.50254 5.3805V15.2405C3.50254 16.0075 3.70653 16.1995 4.47653 16.1545C5.24653 16.1095 6.01554 16.0595 6.79354 16.0145L15.0325 15.5415C15.4745 15.5165 15.6755 15.3215 15.7105 14.8825C15.7165 14.8055 15.7105 14.7285 15.7105 14.6465L15.7095 9.7315ZM14.4625 2.8155L14.4895 2.7645C14.429 2.69045 14.3621 2.62185 14.2895 2.5595C13.7435 2.1605 13.1915 1.7695 12.6465 1.3765C12.2895 1.1035 11.8465 0.966502 11.3975 0.991502C10.5035 1.0455 9.61154 1.1165 8.71754 1.1815L2.97354 1.5985C2.56154 1.6285 2.14454 1.6605 1.74254 1.7085C1.6975 1.71735 1.65511 1.73649 1.61868 1.76441C1.58226 1.79234 1.55278 1.82831 1.53254 1.8695C1.51554 1.9185 1.59653 2.0285 1.65953 2.0795C2.10953 2.4425 2.56753 2.7995 3.02153 3.1575C3.26653 3.3615 3.57954 3.4675 3.89754 3.4545C4.05254 3.4475 4.20754 3.4545 4.36154 3.4405L8.52954 3.1845L14.0675 2.8585C14.1995 2.8435 14.3305 2.8285 14.4625 2.8155Z" fill="white"/>
                        <path d="M11.9666 11.4385V6.7785C11.7146 6.7485 11.4736 6.7135 11.2306 6.6955C11.0976 6.6855 11.0666 6.6255 11.0806 6.5085C11.094 6.38178 11.1499 6.26333 11.2392 6.17251C11.3286 6.08169 11.4461 6.02387 11.5726 6.0085C12.3756 5.9485 13.1786 5.9075 13.9776 5.8595C14.0966 6.2565 13.9776 6.4515 13.5976 6.5265C13.1786 6.6135 13.1786 6.6135 13.1786 7.0385V13.8835C13.1786 14.0425 13.1366 14.1395 12.9866 14.1865C12.7222 14.2853 12.4528 14.3704 12.1796 14.4415C11.7406 14.5335 11.3516 14.4115 11.0906 14.0325C10.7273 13.5088 10.3722 12.9794 10.0256 12.4445C9.22163 11.2005 8.42763 9.9515 7.62863 8.7045C7.61263 8.6785 7.59063 8.6535 7.54563 8.5915C7.53563 8.6775 7.52663 8.7265 7.52663 8.7775V13.4375C7.52663 13.5745 7.57063 13.6305 7.70263 13.6555C7.99863 13.7135 8.29363 13.7845 8.58263 13.8495C8.57754 13.9946 8.52001 14.1329 8.42072 14.2388C8.32142 14.3447 8.18709 14.4111 8.04263 14.4255C7.80015 14.458 7.55616 14.478 7.31163 14.4855C6.71963 14.5215 6.12763 14.5495 5.53663 14.5915C5.36363 14.6035 5.32863 14.5315 5.35863 14.3905C5.36726 14.3058 5.40232 14.2259 5.45885 14.1622C5.51538 14.0985 5.59052 14.0541 5.67363 14.0355C5.85963 13.9905 6.04363 13.9315 6.22763 13.8795V7.1895L5.39863 7.1155C5.37094 7.02919 5.36345 6.93768 5.37672 6.84802C5.39 6.75836 5.42368 6.67294 5.47517 6.59835C5.52667 6.52376 5.59461 6.462 5.67374 6.41781C5.75288 6.37362 5.84111 6.3482 5.93163 6.3435C6.65663 6.2855 7.38663 6.2635 8.10963 6.1815C8.41863 6.1475 8.56263 6.2615 8.71763 6.5005C9.74063 8.0765 10.7776 9.6465 11.8106 11.2175L11.9666 11.4385Z" fill="white"/>
                    </svg>
                </a>
                    
                <!-- Github -->
                <a href="https://github.com/Chhunkea">
                   <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="white"/>
                   </svg>

                </a>
            </div>
        </div>
        
        <!-- Info: Map and Personal Info section -->
        <div class="map">
            <div class="personal-info">
                <a href="https://www.google.com.kh/maps/place/Ta+Dumbong+Kro+Nhong/@13.0907119,103.2079154,18.4z/data=!4m15!1m8!3m7!1s0x31054996eaddd7e5:0x9c55ce955ce9e393!2sKrong+Battambang!3b1!8m2!3d13.09573!4d103.2022055!16zL20vMGMzbjl2!3m5!1s0x31054999fe2e21cd:0x2874096657938e80!8m2!3d13.0906299!4d103.2085088!16s%2Fg%2F1hdzq6dn8?entry=ttu">
                    <div class="location-info">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3076 9.30769C21.3076 14.8462 13 21.3077 13 21.3077C13 21.3077 4.69226 14.8462 4.69226 9.30769C4.69226 4.78277 8.47503 1 13 1C17.5249 1 21.3076 4.78277 21.3076 9.30769Z" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5268 18.5386H22.2308L25 25.0001H1L3.76923 18.5386H5.47323M13 12.077C13.7344 12.077 14.4388 11.7853 14.9581 11.2659C15.4775 10.7466 15.7692 10.0423 15.7692 9.30781C15.7692 8.57336 15.4775 7.86899 14.9581 7.34966C14.4388 6.83033 13.7344 6.53857 13 6.53857C12.2656 6.53857 11.5612 6.83033 11.0419 7.34966C10.5225 7.86899 10.2308 8.57336 10.2308 9.30781C10.2308 10.0423 10.5225 10.7466 11.0419 11.2659C11.5612 11.7853 12.2656 12.077 13 12.077Z" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                       <p>Cambodia</p> 
                    </div>
                </a>
                <p>~By Kim Chhunkea ~</p>
            </div>
        </div>
    </footer>`
    }
}

customElements.define('footer-element', footerElement);