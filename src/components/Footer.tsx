import React from 'react'
import { Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-xl font-bold">MediWell</h3>
            <p className="text-sm">最新の医療情報と健康知識をお届けする映像メディア</p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-accent-light"><Twitter size={24} /></a>
              <a href="#" className="hover:text-accent-light"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent-light"><Youtube size={24} /></a>
            </div>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><a href="#" className="hover:text-accent-light">ホーム</a></li>
              <li><a href="#" className="hover:text-accent-light">医療・治療</a></li>
              <li><a href="#" className="hover:text-accent-light">健康・ウェルネス</a></li>
              <li><a href="#" className="hover:text-accent-light">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2024 MediWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer