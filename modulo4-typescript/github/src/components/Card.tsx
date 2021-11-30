import React from 'react';
import Moment from 'react-moment';


import { MdEmail } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { GoFileDirectory } from 'react-icons/go';

interface IProps {
  info: {
    name: string,
    bio: string,
    login: string,
    avatarUrl: string,
    htmlUrl: string,
    reposUrl: string,
    createAt: string,
    followers: number,
    email?: string
  },
  repositorios: {
    name: string,
    url: string,
    updated: string
  }[]
}

const Card: React.FC<IProps> = ({ info, repositorios }) => {
  return (
      <>
        <div className='top'>
          <div className='logo'>
            <img src={info.avatarUrl} alt={info.login} />
            <div className='name-email'>
              <h1>{info.name}</h1>
              {info.email === null ? (<><span> <MdEmail /> leandro@email.com</span></>) : info.email}
              <span><AiOutlineUser />{info.login}</span>
              <span><BiWorld /><a href={info.htmlUrl} target='_blank'>{info.htmlUrl}</a></span>
            </div>
          </div>
          <div className='data-seguidores'>
            <span>Criado em <Moment date={info.createAt} format="DD/MM/YYYY" /></span>
            <span>Seguidores {info.followers}</span>
          </div>
        </div>
        <div className='repositories'>
          <div>
            <h2>Repositórios</h2>
            <a href={info.reposUrl}>{info.reposUrl}</a>
          </div>
          <ul>
            {repositorios.map((element, index) =>
            (<li className='repository' key={index}>
              <GoFileDirectory />
              <div>
                <a href={element.url} target='_blank'>{element.name}</a>
                <span>Atualizado em <Moment date={element.updated} format="DD/MM/YYYY" /></span>
              </div>
            </li>
            )
            )}
          </ul>
        </div>
    </>
  );
}

export default Card;