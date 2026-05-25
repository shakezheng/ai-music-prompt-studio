(function() {
  var currentPage = document.body.getAttribute('data-page') || 'home';

  var pages = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'lyrics', label: 'Lyrics Structurer', href: 'lyrics-structurer.html' },
    { id: 'style', label: 'Style Builder', href: 'style-builder.html' },
    { id: 'templates', label: 'Templates', href: 'templates.html' },
    { id: 'meta-tags', label: 'Meta Tags Guide', href: 'meta-tags-guide.html' },
    { id: 'guides', label: 'Guides', href: 'guides.html' },
    { id: 'faq', label: 'FAQ', href: 'faq.html' }
  ];

  var navHTML = '<nav class="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">' +
    '<div class="max-w-7xl mx-auto px-4">' +
      '<div class="flex items-center justify-between h-14">' +
        '<a href="index.html" class="flex items-center gap-2.5 flex-shrink-0">' +
          '<div class="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' +
          '</div>' +
          '<span class="font-extrabold text-slate-200 text-sm tracking-tight">AI Music <span class="gradient-text">Prompt Studio</span></span>' +
        '</a>' +
        '<div class="nav-desktop flex items-center gap-1 overflow-x-auto">';

  pages.forEach(function(p) {
    var active = p.id === currentPage;
    navHTML += '<a href="' + p.href + '" class="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ' +
      (active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800') + '">' + p.label + '</a>';
  });

  navHTML += '</div>' +
        '<button class="nav-mobile-btn p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors" onclick="document.getElementById(\'mobileMenu\').classList.toggle(\'hidden\')" aria-label="Toggle menu">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>' +
        '</button>' +
      '</div>' +
      '<div id="mobileMenu" class="nav-mobile-menu hidden pb-3">';

  pages.forEach(function(p) {
    var active = p.id === currentPage;
    navHTML += '<a href="' + p.href + '" class="block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ' +
      (active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800') + '">' + p.label + '</a>';
  });

  navHTML += '</div></div></nav>';

  var placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navHTML;
  }

  var footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = '<footer class="mt-12 border-t border-slate-800 bg-slate-950/80" role="contentinfo">' +
      '<div class="max-w-7xl mx-auto px-4 py-6">' +
        '<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">' +
          '<div>' +
            '<h3 class="text-sm font-semibold text-slate-300 mb-2">AI Music Master Prompt Studio</h3>' +
            '<p class="text-xs text-slate-500 leading-relaxed">100% client-side, free forever. No signup, zero tracking. The fastest way to structure lyrics and build style prompts for Suno AI and Udio.</p>' +
          '</div>' +
          '<div>' +
            '<h3 class="text-sm font-semibold text-slate-300 mb-2">Tools</h3>' +
            '<ul class="text-xs text-slate-500 space-y-1">' +
              '<li><a href="index.html" class="hover:text-indigo-400 transition-colors">Home</a></li>' +
              '<li><a href="lyrics-structurer.html" class="hover:text-indigo-400 transition-colors">Lyrics Structurer</a></li>' +
              '<li><a href="style-builder.html" class="hover:text-indigo-400 transition-colors">Style Prompt Builder</a></li>' +
              '<li><a href="templates.html" class="hover:text-indigo-400 transition-colors">Prompt Templates</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h3 class="text-sm font-semibold text-slate-300 mb-2">Learn</h3>' +
            '<ul class="text-xs text-slate-500 space-y-1">' +
              '<li><a href="meta-tags-guide.html" class="hover:text-indigo-400 transition-colors">Meta Tags Guide</a></li>' +
              '<li><a href="guides.html" class="hover:text-indigo-400 transition-colors">Guides & Articles</a></li>' +
              '<li><a href="faq.html" class="hover:text-indigo-400 transition-colors">FAQ</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h3 class="text-sm font-semibold text-slate-300 mb-2">Popular Topics</h3>' +
            '<ul class="text-xs text-slate-500 space-y-1">' +
              '<li>Suno meta tags list</li>' +
              '<li>Udio v4 prompt structure</li>' +
              '<li>How to add guitar solo in Suno</li>' +
              '<li>Tag stacking & style prompts</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="flex flex-col md:flex-row items-center justify-between gap-3 text-xs pt-5 border-t border-slate-800">' +
          '<span class="text-slate-500">AI Music Master Prompt Studio &mdash; 100% Client-Side, Zero Tracking &middot; Free for Everyone</span>' +
          '<div class="flex items-center gap-3 text-slate-600">' +
            '<span>Compatible with Suno AI V5.5 & Udio V4</span>' +
            '<span>&middot;</span>' +
            '<span>2026</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }
})();