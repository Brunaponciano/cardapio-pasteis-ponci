"""
Servidor local para o Cardápio Digital dos Pastéis Ponci.
Permite testar tanto no computador quanto no celular (via Wi-Fi / QR Code).
"""

import http.server
import socket
import socketserver
import webbrowser
import os
import sys

PORT = 8080

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Doesn't need to be reachable, just gets the preferred outgoing interface
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    local_ip = get_local_ip()
    
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 65)
            print("         🥟 PASTÉIS PONCI - CARDÁPIO DIGITAL 🥟")
            print("=" * 65)
            print(f"  Status: Servidor ativo e pronto para uso!")
            print(f"")
            print(f"  👉 No Computador:  http://localhost:{PORT}")
            print(f"  📱 No Celular:     http://{local_ip}:{PORT}")
            print(f"")
            print(f"  Para que os clientes na mesma rede Wi-Fi acessem,")
            print(f"  use o endereço do celular no QR Code!")
            print("=" * 65)
            print("  Pressione Ctrl+C para encerrar o servidor a qualquer momento.")
            print("=" * 65)
            
            # Open browser automatically
            try:
                webbrowser.open(f"http://localhost:{PORT}")
            except Exception:
                pass
                
            httpd.serve_forever()
    except OSError as e:
        if "address already in use" in str(e).lower() or e.errno == 98 or e.errno == 10048:
            print(f"\nA porta {PORT} já está em uso. Tentando abrir http://localhost:{PORT} no navegador...")
            try:
                webbrowser.open(f"http://localhost:{PORT}")
            except Exception:
                pass
        else:
            print(f"Erro ao iniciar servidor: {e}")

if __name__ == '__main__':
    run_server()
