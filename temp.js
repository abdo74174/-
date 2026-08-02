
                // Micro-interaction: Update progress bar on file input
                const fileInputs = document.querySelectorAll('input[type="file"]');
                const progressBar = document.querySelector('.bg-error.w-\\[35\\%\]');
                const progressText = document.querySelector('.font-label-md.text-label-md:nth-of-type(2)');

                let uploadedCount = 0;

                fileInputs.forEach(input => {
                    input.addEventListener('change', (e) => {
                        if (e.target.files.length > 0) {
                            const parent = e.target.closest('.border-dashed');
                            parent.classList.remove('border-outline-variant');
                            parent.classList.add('border-secondary', 'bg-secondary/5');
                            parent.querySelector('.material-symbols-outlined').classList.add('text-secondary');
                            parent.querySelector('.text-outline').innerText = 'تم رفع الملف: ' + e.target.files[0].name;
                            parent.querySelector('.text-outline').classList.add('text-secondary');

                            uploadedCount++;
                            const newProgress = 35 + (uploadedCount * 15);
                            progressBar.style.width = newProgress + '%';
                            progressText.innerText = newProgress + '%';

                            if (newProgress > 50) {
                                progressBar.classList.remove('bg-error');
                                progressBar.classList.add('bg-secondary');
                            }
                        }
                    });
                });

                // Duration Button Selection
                const durationBtns = document.querySelectorAll('button[type="button"]');
                durationBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        durationBtns.forEach(b => {
                            b.classList.remove('bg-primary-container', 'text-on-primary-container', 'border-primary-container');
                            b.classList.add('bg-transparent', 'text-on-surface-variant', 'border-outline-variant');
                        });
                        btn.classList.add('bg-primary-container', 'text-on-primary-container', 'border-primary-container');
                        btn.classList.remove('bg-transparent', 'text-on-surface-variant', 'border-outline-variant');
                    });
                });

                // Demo Activation Toggle
                const toggle = document.getElementById('demo-activation-toggle');
                const toggleBg = document.getElementById('toggle-bg');
                const toggleDot = document.getElementById('toggle-dot');
                
                const statusPill = document.getElementById('status-pill');
                const statusIcon = document.getElementById('status-icon');
                const statusText = document.getElementById('status-text');
                const statusDesc = document.getElementById('status-desc');
                
                const statusCard = document.getElementById('status-card');
                const statusBadge = document.getElementById('status-badge');
                const statusProgressText = document.getElementById('status-progress-text');
                const statusProgressBar = document.getElementById('status-progress-bar');
                const statusMsg = document.getElementById('status-msg');
                
                const lockedOverlay = document.getElementById('locked-overlay');
                const departmentsGrid = document.getElementById('departments-grid');
                const radioInputs = document.querySelectorAll('input[type="radio"]');

                toggle.addEventListener('change', (e) => {
                    const isActive = e.target.checked;
                    
                    if (isActive) {
                        // Toggle UI
                        toggleBg.classList.replace('bg-outline-variant', 'bg-primary');
                        // Use negative translate for RTL
                        toggleDot.classList.add('-translate-x-4');
                        
                        // Top Pill
                        statusPill.classList.replace('bg-error-container', 'bg-primary-container');
                        statusPill.classList.replace('text-on-error-container', 'text-on-primary-container');
                        statusPill.classList.remove('animate-pulse');
                        statusIcon.textContent = 'check_circle';
                        statusText.textContent = 'الحساب مفعل وجاهز';
                        statusDesc.textContent = 'يمكنك الآن تسجيل رغباتك واختيار القسم التدريبي المناسب لك في المستشفيات المتاحة.';
                        
                        // Status Card
                        statusCard.classList.replace('border-error', 'border-primary');
                        statusBadge.classList.replace('text-error', 'text-primary');
                        statusBadge.classList.replace('bg-error/10', 'bg-primary/10');
                        statusBadge.textContent = 'نشط';
                        statusProgressText.textContent = '100%';
                        statusProgressBar.style.width = '100%';
                        statusProgressBar.classList.replace('bg-error', 'bg-primary');
                        statusMsg.textContent = 'تم مراجعة المستندات وتفعيل حسابك بنجاح.';
                        
                        // Unlock Departments
                        lockedOverlay.classList.add('opacity-0', 'pointer-events-none');
                        setTimeout(() => lockedOverlay.classList.add('hidden'), 300);
                        departmentsGrid.classList.remove('opacity-40', 'grayscale', 'pointer-events-none');
                        
                        // Enable Radios
                        radioInputs.forEach(radio => radio.removeAttribute('disabled'));
                    } else {
                        // Toggle UI
                        toggleBg.classList.replace('bg-primary', 'bg-outline-variant');
                        toggleDot.classList.remove('-translate-x-4');
                        
                        // Top Pill
                        statusPill.classList.replace('bg-primary-container', 'bg-error-container');
                        statusPill.classList.replace('text-on-primary-container', 'text-on-error-container');
                        statusPill.classList.add('animate-pulse');
                        statusIcon.textContent = 'warning';
                        statusText.textContent = 'الحساب غير مفعل حالياً';
                        statusDesc.textContent = 'يرجى استكمال رفع المستندات المطلوبة لتفعيل حسابك والبدء في اختيار التخصصات المتاحة للتدريب العملي في مستشفيات قصر العيني.';
                        
                        // Status Card
                        statusCard.classList.replace('border-primary', 'border-error');
                        statusBadge.classList.replace('text-primary', 'text-error');
                        statusBadge.classList.replace('bg-primary/10', 'bg-error/10');
                        statusBadge.textContent = 'غير نشط';
                        statusProgressText.textContent = '35%';
                        statusProgressBar.style.width = '35%';
                        statusProgressBar.classList.replace('bg-primary', 'bg-error');
                        statusMsg.textContent = 'بانتظار مراجعة المستندات من قبل الإدارة المركزية.';
                        
                        // Lock Departments
                        lockedOverlay.classList.remove('hidden');
                        setTimeout(() => lockedOverlay.classList.remove('opacity-0'), 10);
                        departmentsGrid.classList.add('opacity-40', 'grayscale', 'pointer-events-none');
                        
                        // Disable Radios
                        radioInputs.forEach(radio => {
                            radio.setAttribute('disabled', 'true');
                            radio.checked = false;
                        });
                    }
                });
            