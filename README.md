# Ideal Enigma Website

## Installation Instructions

    
### Install editorconfig for vim (optional)
    
    mkdir -p "$HOME/.vim/autoload" "$HOME/.vim/bundle" && curl -LSso "$HOME/.vim/autoload/pathogen.vim" https://tpo.pe/pathogen.vim
    cd "$HOME/.vim/bundle/" && git clone https://github.com/editorconfig/editorconfig-vim.git
    if [ $(grep "execute pathogen#infect()" "$HOME/.vimrc" | wc -l) = 0 ]
    then
      echo "execute pathogen#infect()" >> "$HOME/.vimrc"
    fi
  
### Package install
    
    npm install -g gulp bower
    npm install && bower install

### Run development server
    
    gulp serve

### Build for distribution
    
    gulp lint && gulp

