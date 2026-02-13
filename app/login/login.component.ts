import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  username = '';
  password = '';
  rememberMe = false;
  isLoading = false;
  showPassword = false;
  flipState: 'front' | 'back' = 'back';
  particles: Particle[] = [];
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  animationId!: number;
  audioPlaying = false;
  errorMessage = '';
  showForgotPassword = false;

  private destroy$ = new Subject<void>();
  private resizeTimeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initParticles();
    this.setupCanvas();
    this.setupKeyboardNavigation();
    
    // Auto-focus on desktop if no errors
    setTimeout(() => {
      if (window.innerWidth > 768 && !this.errorMessage) {
        this.usernameInput?.nativeElement?.focus();
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initParticles(): void {
    const count = 80;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  private setupCanvas(): void {
    this.canvas = document.getElementById('fx') as HTMLCanvasElement;
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.animateParticles();
  }

  private resizeCanvas(): void {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.resizeCanvas();
    }, 100);
  }

  private animateParticles(): void {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animateParticles());
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !this.isLoading) {
        this.onSubmit();
      }
    });
  }

  toggleFlip(): void {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordInput?.nativeElement) {
      this.passwordInput.nativeElement.type = this.showPassword ? 'text' : 'password';
    }
  }

  playAudio(): void {
    if (this.audioPlaying) return;
    
    const audio = document.getElementById('welcomeAudio') as HTMLAudioElement;
    if (audio) {
      audio.play().then(() => {
        this.audioPlaying = true;
      }).catch(() => {
        // Audio autoplay blocked - handle gracefully
      });
    }
  }

  onSubmit(): void {
    if (!this.username.trim() || !this.password) {
      this.errorMessage = 'يرجى إدخال اسم المستخدم وكلمة المرور';
      this.shakeForm();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate login - replace with actual auth service call
    setTimeout(() => {
      // For demo purposes, accept any credentials
      this.isLoading = false;
      
      // Navigate to home/dashboard
      this.router.navigate(['/']);
    }, 1500);
  }

  shakeForm(): void {
    const formCard = document.querySelector('.flip-card-container');
    if (formCard) {
      formCard.classList.add('shake');
      setTimeout(() => {
        formCard.classList.remove('shake');
      }, 500);
    }
  }

  closeError(): void {
    this.errorMessage = '';
  }

  onForgotPassword(): void {
    // Implement forgot password logic
    alert('سيتم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني المسجل');
  }

  // Getters for template
  get isDesktop(): boolean {
    return window.innerWidth > 768;
  }

  get flipTransform(): string {
    return this.flipState === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }
}
