import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface ProductSpec {
  anc: number;
  battery: number;
  latency: number;
}

interface Project {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // Theme state: dark mode is enabled by default for premium design impact
  isDarkMode = signal<boolean>(true);

  // Customizer active color
  activeColor = signal<string>('pink');

  // Portfolio filtration and detail modals
  activeFilter = signal<string>('todos');
  selectedProject = signal<Project | null>(null);

  // Floating field form contact submission state
  formSubmitted = signal<boolean>(false);

  // Customizer Specifications for Auriculares Studio Pro
  private productSpecs: Record<string, ProductSpec> = {
    pink: { anc: 98, battery: 48, latency: 10 },
    purple: { anc: 92, battery: 40, latency: 12 },
    silver: { anc: 80, battery: 36, latency: 18 },
    dark: { anc: 95, battery: 60, latency: 8 }
  };

  // Mock portfolio projects
  projects = signal<Project[]>([
    {
      id: 'p1',
      category: 'branding',
      categoryName: 'Identidad de Marca',
      title: 'Aura Studio Rebrand',
      shortDesc: 'Revolución visual minimalista para una discográfica independiente pionera.',
      longDesc: 'Diseño de identidad visual completa que incluye logotipos dinámicos, pautas tipográficas modernas y dirección de arte digital. Capturamos la esencia etérea de Aura Studio utilizando paletas de colores enigmáticos y composiciones orgánicas.'
    },
    {
      id: 'p2',
      category: 'web',
      categoryName: 'Desarrollo Web / UX',
      title: 'Nova E-Commerce',
      shortDesc: 'Una plataforma de comercio electrónico de alta gama con carga instantánea.',
      longDesc: 'E-commerce interactivo desarrollado con Next.js y WebGL para visualizaciones en tiempo real. Cuenta con transiciones en 3D del catálogo de productos, pasarela de pago simplificada en un solo clic y tiempos de carga inferiores a 200 ms.'
    },
    {
      id: 'p3',
      category: '3d',
      categoryName: 'Renderizado 3D / CGI',
      title: 'Cosmos Kinetic Art',
      shortDesc: 'Simulaciones cinéticas espaciales interactivas para arte digital.',
      longDesc: 'Renderizados volumétricos en 3D y simulaciones de partículas en movimiento. Creados para campañas publicitarias interactivas que buscan sumergir al usuario en mundos futuristas tridimensionales de alta fidelidad estética.'
    },
    {
      id: 'p4',
      category: 'branding',
      categoryName: 'Identidad de Marca',
      title: 'Krypton Identity',
      shortDesc: 'Sistema visual futurista y modular para una fintech de Web3.',
      longDesc: 'Rediseño de imagen corporativa con tipografía variable a medida y patrones generados de forma algorítmica. Creamos una marca disruptiva alineada a las expectativas de la economía descentralizada y las tecnologías blockchain.'
    },
    {
      id: 'p5',
      category: 'web',
      categoryName: 'Desarrollo Web / UX',
      title: 'Zephyr Portfolio',
      shortDesc: 'Diseño inmersivo y responsivo para una reconocida firma de arquitectura.',
      longDesc: 'Portafolio web minimalista con diseño de retícula asimétrica y efectos de scroll paralaje fluidos. Desarrollado con accesibilidad AAA completa para exponer planos arquitectónicos y galerías fotográficas en ultra-alta resolución.'
    },
    {
      id: 'p6',
      category: '3d',
      categoryName: 'Renderizado 3D / CGI',
      title: 'Vertigo Concept',
      shortDesc: 'Modelados tridimensionales conceptuales de calzado deportivo futurista.',
      longDesc: 'Diseño y renderizado 3D fotorrealista de sneakers interactivos. Desarrollado como material publicitario interactivo, permitiendo al usuario rotar el calzado en 360 grados directamente en el navegador con texturas realistas de tela y goma.'
    }
  ]);

  // Computed signals
  activeProductColor = computed(() => 'prod-' + this.activeColor());
  
  activeSpecs = computed(() => this.productSpecs[this.activeColor()]);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'todos') {
      return this.projects();
    }
    return this.projects().filter(p => p.category === filter);
  });

  // Action methods
  toggleTheme(): void {
    this.isDarkMode.update(prev => !prev);
  }

  setProductColor(color: string): void {
    this.activeColor.set(color);
  }

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      this.formSubmitted.set(true);
      form.reset();
      
      // Auto-dismiss success notification after 5 seconds
      setTimeout(() => {
        this.formSubmitted.set(false);
      }, 5000);
    }
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

